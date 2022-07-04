import boardSlice, {
  setBoard,
  setPlayer,
  setTurnsCounter,
  setWinner,
  resetBoard
} from "./boardSlice";

describe("boardSlice should", () => {
  const initialState = {
    board: ["", "", "", "", "", "", "", "", ""],
    player: "",
    turnsCounter: 0,
    winner: "",
  };

  it("change the state of player to the current player", () => {
    const currentPlayer = setPlayer("X");
    const newState = boardSlice(initialState, currentPlayer);
    expect(newState.player).toEqual("X");
  });

  it("change the state of the board to the current board", () => {
    const currentBoard = setBoard(["X", "", "", "", "", "", "", "", ""]);
    const newState = boardSlice(initialState, currentBoard);
    expect(newState.board).toEqual(["X", "", "", "", "", "", "", "", ""]);
  });

  it("increment the turnsCounter", () => {
    const newState = boardSlice(
      initialState,
      setTurnsCounter(initialState.turnsCounter + 1)
    );
    expect(newState.turnsCounter).toEqual(1);
  });

  it("change the state of winner to the current winner", () => {
    const currentWinner = setWinner("The player X is the winner!");
    const newState = boardSlice(initialState, currentWinner);
    expect(newState.winner).toEqual("The player X is the winner!");
  });

  it("reset board to initial state", () => {
    const newBoard = boardSlice(
      initialState,
      setWinner("The player X is the winner!")
    );
    const afterReset = boardSlice(newBoard, resetBoard());
    expect(afterReset).toEqual(initialState);
  });
});
