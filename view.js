'use strict';

APP = APP || {};

APP.View = (function() {

  var init = function(args) {
    _$moleContainer = $('#mole-container');
    _createBoard(args.board);
    _attachClickHandler(args.clickHandler);
  };

  var switchActiveMoleHole = function(oldMoleHole, newMoleHole) {
    _activateMoleHole(newMoleHole);
    deactivateMoleHole(oldMoleHole);
  };

  var _activateMoleHole = function(moleHole) {
    var $moleHole = _findMoleHole(moleHole);
    $moleHole.addClass("active");
  };

  var deactivateMoleHole = function(moleHole) {
    var $moleHole = _findMoleHole(moleHole);
    $moleHole.removeClass("active");
  };

  var _findMoleHole = function(moleHole) {
    var dataX = moleHole.x;
    var dataY = moleHole.y;
    var compositeKeyString = "[data-x=" + dataX + "]" +
                             "[data-y=" + dataY + "]"
    return $(compositeKeyString);
  };

  var _attachClickHandler = function(callback) {
    _$moleContainer.on("click", ".mole-hole", function(e) {
      var $target = $(e.target);
      var targetX = parseInt($target.data("x"));
      var targetY = parseInt($target.data("y"));
      callback(targetX, targetY);
    });
  };

  var _createBoard = function(board) {
    for(var rowCount = 0; rowCount < board.length; rowCount++) {
      var row = board[rowCount];
      var $row = $('<div>').addClass('row');
      for(var colCount = 0; colCount < row.length; colCount++) {
        var moleHole = row[colCount];
        $row.append(_createMoleHole(moleHole));
      }
      _$moleContainer.append($row);
    }
  };

  var _createMoleHole = function(moleHole) {
    var $moleHole = $('<div>')
      .addClass("mole-hole")
      .attr("data-x", moleHole.x)
      .attr("data-y", moleHole.y);
    return $moleHole;
  };

  var _$moleContainer;

  return {
    init: init,
    switchActiveMoleHole: switchActiveMoleHole,
    deactivateMoleHole: deactivateMoleHole
  };

}());
