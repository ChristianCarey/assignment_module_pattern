'use strict';

var APP = APP || {};

APP.BModule = (function() {

  var _hidden = "something different";
  var publik = "everybody knows again";
  var _sneakyMethod = function() {
    publik += "?";
  };

  return {

    getPublic: function() {
      return publik;
    },

    setPublic: function(newPublic) {
        publik = newPublic;
    },

    askPublic: function() {
      _sneakyMethod();
      return publik;
    },

  };

}());

APP.BModule.getPublic();
