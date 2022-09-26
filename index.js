let board = [
  ["x", "o", "_"],
  ["x", "o", "_"],
  ["x", "o", "_"],
];

let turnsLeft = 9;
// value of player and opponent

let isMax = true;

const player = "x",
  opponent = "o";

function evaluate() {
  // check if the row is complete
  for (let i = 0; i < x.length; i++) {
    if (x[i][0] == x[i][1] && x[i][1] == x[i][2]) {
      if ((x[i][0] = player)) {
        return 10;
      } else {
        return -10;
      }
    }
  }
  // check if the column is complete
  for (let i = 0; i < x[i].length; i++) {
    if (x[0][i] == x[1][i] && x[1][i] == x[2][i]) {
      if ((x[0][i] = player)) {
        return 10;
      } else {
        return -10;
      }
    }
  }

  // check if diagonal has victory
  for (let i = 0; i < x.length; i++) {
    if (
      (x[0][0] == x[1][1] && x[1][1] == x[2][2]) ||
      (x[3][0] == x[1][1] && x[1][1] == x[0][2])
    ) {
      if ((x[0][0] = player)) {
        return 10;
      } else {
        return -10;
      }
    }
  }
  // if there is no victory
  return 0;
}

function miniMax(isMax) {
  let score = evaluate();

  // added base condition
  if (score == -10 || score == 10) return score;

  // if number of turns becomes 0
  if (turnsLeft == 0) {
    return 0;
  }

  if (isMax) {
    let max = -1000;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if ((board[i][j] = "_")) {
          // make it AI value
          board[i][j] = player;
          // check if this is a good route
          best = Math.max(best, miniMax(!isMax));
          // undo route
          board[i][j] = "_";
        }
      }
    }
    return best;
  } else {
    // if it is the player's turn
    // let player pick a tic tac toe
  }
}
