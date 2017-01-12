'use strict':

APP = APP || {};

APP.Model = (function() {

  var boardState;

  var init = function() {
    _setupBoard(2, 4);

  };

  var _setupBoard = function(rowNums, colNums) {
    var rows = _createRows(rowNums, colNums);
    _populateRows(colNums, rows);
    return rows;
  };

  var _createRows = function(rowNums, colNums) {
    var rows = new Array(number);
    rows.map(function() {
      return new Array(colNums)
    });
    return rows;
  };

  var _populateRows(rows) {
    rows.forEach(function(row) {
      row.map(function()) {
        new MoleHole;
      };
    });
  };

  var getBoardState = function() {
    return boardState
  };

  return {
    init: init
    getBoardState: getBoardState
  }
}());
