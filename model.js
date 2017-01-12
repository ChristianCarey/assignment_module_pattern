'use strict';

APP = APP || {};

APP.Model = (function() {

  var rows;
  var _score;
  var _activeMole;

  var init = function() {
    _setupBoard(2, 4);
    _score = 0;
    randomMole();
  };

  var getBoard = function() {
    return rows;
  };

  var click = function(x, y) {
    var moleHole = rows[y][x];
    if (moleHole.active) {
      moleHole.active = false;
      _score++;
    }
    return moleHole;
  };

  var randomMole = function() {
    var randRow = Math.floor(Math.random() * rows.length);
    var randCol = Math.floor(Math.random() * rows[0].length);
    _activeMole = rows[randRow][randCol];
    return _activeMole;
  };

  var removeActiveMole = function() {
    _activeMole.active = false;
    return _activeMole;
  }

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
    getBoard: getBoard,
    click: click,
    randomMole: randomMole,
    removeActiveMole: removeActiveMole
  };

}());
