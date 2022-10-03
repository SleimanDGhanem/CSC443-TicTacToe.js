

const player = "x",
  bot = "o";

function evaluate() {
  // check if the row is complete
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
      if ((board[i][0] = bot)) {
        return 10;
      } else {
        return -10;
      }
    }
  }
  // check if the column is complete
  for (let i = 0; i < board[i].length; i++) {
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
      if ((board[0][i] = bot)) {
        return 10;
      } else {
        return -10;
      }
    }
  }

  // check if diagonal has victory
  for (let i = 0; i < board.length; i++) {
    if (
      (board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
      (board[3][0] == board[1][1] && board[1][1] == board[0][2])
    ) {
      if ((board[0][0] = bot)) {
        return 10;
      } else {
        return -10;
      }
    }
  }
  // if there is no victory
  return 0;
}

function miniMax(board, depth, isMax) {
  let score = evaluate();

  // added base condition
  if (score == -10 || score == 10) return score;

  if (isMax) {
    let best = -1000;

    // Traverse all cells
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Check if cell is empty
        if (board[i][j] == "_") {
          // Make the move
          board[i][j] = player;

          // Call minimax recursively
          // and choose the maximum value
          best = Math.max(best, minimax(board, !isMax));

          if(depth === 1 && best === 10){
            return best
          }
          // Undo the move
          board[i][j] = "_";
        }
      }
    }
    return best;
  }

  // If this minimizer's move
  else {
    let best = 1000;

    // Traverse all cells
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Check if cell is empty
        if (board[i][j] == "_") {
          // Make the move
          board[i][j] = opponent;

          // Call minimax recursively and
          // choose the minimum value
          best = Math.min(best, minimax(board, !isMax));

          // Undo the move
          board[i][j] = "_";
        }
      }
    }
    return best;
  }
}

function playerTurn(testboard) {
  let turnFinished = false;
  while (turnFinished == false) {
    console.log(testboard);
    let result = window.prompt("enter a value from 1 to 9");
    let answer = parseInt(result);

    if (answer >= 1 && answer <= 3) {
      testboard[0][answer] = player;
      turnFinished = true;
    } else if (answer >= 4 && answer <= 6) {
      testboard[1][answer] = player;
      turnFinished = true;
    } else if (answer >= 6 && answer <= 9) {
      testboard[2][answer] = player;
      turnFinished = true;
    } else {
      console.log("do it again you put a wrong number");
    }
  }
}

function TicTacToe() {
  let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  // console.log(board);
  for (let turnsLeft = 9; turnsLeft > 0; turnsLeft--) {
    
    playerTurn(board);
    turnsLeft--;
    Minimax(board, 0, true);
  }
}
TicTacToe();
