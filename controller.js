'use strict';

var APP = APP || {};

APP.Controller = (function(View, Model) {

  var init = function() {
    Model.init();
    View.init({ board: Model.getBoard(),
                clickHandler: _moleHoleClicked  });
  };

  var play = function() {
    var interval = setInterval(function() {
      var oldMole = Model.removeActiveMole();
      var newMole = Model.randomMole();
      View.switchActiveMoleHole(oldMole, newMole);
    }, 1000);
  }

  var _moleHoleClicked = function(x, y) {
    var moleHole = Model.click(x, y);
    View.deactivateMoleHole(moleHole);
  };

  return {
    init: init,
    play: play
  };

}(APP.View, APP.Model));
