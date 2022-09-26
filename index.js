let board = [
  ["x", "o", "_"],
  ["x", "o", "_"],
  ["x", "o", "_"],
];

let turnsLeft = 9;

// value of player and opponent

let player = "x",
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

function miniMax() {
  let score = evaluate();

  // added base condition
  if (score == -10 || score == 10) return score;

  // if number of turns becomes 0 
  if(turnsLeft == 0){
    return 0
  }
  else{
    turnsLeft--;
  }

  

}
