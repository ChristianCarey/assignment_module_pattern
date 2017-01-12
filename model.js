'use strict';

APP = APP || {};

APP.Model = (function() {

  var rows;

  var init = function() {
    _setupBoard(2, 4);

  };

  var getBoard = function() {
    return rows;
  };

  var _setupBoard = function(rowNums, colNums) {
    rows = _createRows(rowNums, colNums);
    _populateRows(rows);
  };

  var _createRows = function(rowNums, colNums) {
    var rows = new Array(rowNums);
    for(var rowCount = 0; rowCount < rowNums; rowCount++) {
      rows[rowCount] = new Array(colNums);
    }
    return rows;
  };

  var _populateRows = function(rows) {
    rows.forEach(function(row, rowIndex) {
      for (var colCount = 0; colCount < row.length; colCount++) {
        row[colCount] = new _MoleHole(colCount, rowIndex);
      };
    });
  };

  var _MoleHole = function MoleHole(x, y) {
    this.x = x;
    this.y = y;
    this.active = false;
  };

  return {
    init: init,
    getBoard: getBoard
  };

}());
