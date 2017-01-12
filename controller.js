'use strict';

var APP = APP || {};

APP.Controller = (function(View, Model) {

  var init = function() {
    Model.init();
    View.init(Model.getBoard());
  }

  return {
    init: init
  }
}(APP.View, APP.Model))