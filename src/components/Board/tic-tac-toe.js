const winningCombinations = [
  "0,1,2",
  "3,4,5",
  "6,7,8",
  "0,3,6",
  "1,4,7",
  "2,5,8",
  "0,4,8",
  "2,4,6",
];

export const game = (board, turnsCounter) => {
  let winnerPlayer = "";
  winningCombinations.forEach((combination) => {
    const [firstBoardPosition, secondBoardPosition, thirdBoardPosition] = combination.split(",");
    const isNotEmpty = board[firstBoardPosition] !== "";
    const isEqualTheFirstAndSecondPosition = board[firstBoardPosition] === board[secondBoardPosition];
    const isEqualTheSecondAndThirdPosition = board[secondBoardPosition] === board[thirdBoardPosition];
    if (isNotEmpty && isEqualTheFirstAndSecondPosition && isEqualTheSecondAndThirdPosition) {
      winnerPlayer = `Player ${board[firstBoardPosition]} is the winner!`;
    }
    if (turnsCounter === 9 && winnerPlayer === "") {
      winnerPlayer = "Tie!";
    }
  });
  return winnerPlayer;
};
