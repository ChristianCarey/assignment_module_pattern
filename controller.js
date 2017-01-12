'use strict';

var APP = APP || {};

APP.Controller = (function(View, Model) {

  var init = function() {
    Model.init();
    View.init({ board: Model.getBoard(),
                clickHandler: _moleHoleClicked  });
  };

  var _moleHoleClicked = function(x, y) {
    var moleHole = Model.click(x, y);
    View.updateMoleHole(moleHole);
  };

  return {
    init: init
  };

}(APP.View, APP.Model));
