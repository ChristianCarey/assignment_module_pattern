'use strict';

var APP = APP || {};

APP.AModule = (function(otherModule) {

  var _hidden = "something";
  var publik = "everybody knows";
  var _sneakyMethod = function() {
    publik += "!";
  };

  var returnObject = {};

  returnObject.getPublic = function() {
    return publik;
  };

  returnObject.setPublic = function(newPublic) {
      publik = newPublic;
  };

  returnObject.yellPublic = function() {
    _sneakyMethod();
    return publik;
  };

  returnObject.getOtherPublic = function() {
    return otherModule.getPublic();
  }

  return returnObject;

}(APP.BModule));

var a = APP.AModule;
a.getPublic();