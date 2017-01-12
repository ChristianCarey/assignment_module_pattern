'use strict':

APP = APP || {};

APP.Model = (function() {
  
  var boardState;

  var init = function() {
    boardState = new Array(2)
  
  };

  var getBoardState = function() {
    return boardState
  };

  return {
    init: init
    getBoardState: getBoardState
  }
}());