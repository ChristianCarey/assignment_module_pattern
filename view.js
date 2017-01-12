'use strict';

APP = APP || {};

APP.View = (function() {

  var init = function(board) {
    _$moleContainer = $('#mole-container');
    _createBoard(board);
    _attachClickHandler();
  };

  var _$moleContainer;

  var _attachClickHandler() {
    $_moleContainer.on("click", )
  }

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
      .attr("id", moleHole.x + "-" + moleHole.y);
    return $moleHole;
  };

  return {
    init: init
  }

}());
