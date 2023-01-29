export const random = (arr) => Math.floor(Math.random() * arr.length);

export const whoWins = (arr) => {
  if (
    (arr[0] === 2 && arr[1] === 2 && arr[2] === 2) ||
    (arr[0] === 2 && arr[3] === 2 && arr[6] === 2) ||
    (arr[0] === 2 && arr[4] === 2 && arr[8] === 2) ||
    (arr[1] === 2 && arr[4] === 2 && arr[7] === 2) ||
    (arr[3] === 2 && arr[4] === 2 && arr[5] === 2) ||
    (arr[6] === 2 && arr[7] === 2 && arr[8] === 2) ||
    (arr[2] === 2 && arr[5] === 2 && arr[8] === 2) ||
    (arr[2] === 2 && arr[4] === 2 && arr[6] === 2)
  ) {
    return "You Win";
  } else if (
    (arr[0] === 3 && arr[1] === 3 && arr[2] === 3) ||
    (arr[0] === 3 && arr[3] === 3 && arr[6] === 3) ||
    (arr[0] === 3 && arr[4] === 3 && arr[8] === 3) ||
    (arr[1] === 3 && arr[4] === 3 && arr[7] === 3) ||
    (arr[3] === 3 && arr[4] === 3 && arr[5] === 3) ||
    (arr[6] === 3 && arr[7] === 3 && arr[8] === 3) ||
    (arr[2] === 3 && arr[5] === 3 && arr[8] === 3) ||
    (arr[2] === 3 && arr[4] === 3 && arr[6] === 3)
  ) {
    return "PC Wins";
  } else {
    return "Tie";
  }
};
