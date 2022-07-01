import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: ["", "", "", "", "", "", "", "", ""],
    turnsCounter: 0,
    winner: "",
    player: "",
  },
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setTurnsCounter: (state, action) => {
      state.turnsCounter = action.payload;
    },
  },
});

export const { setBoard, setPlayer, setWinner, setTurnsCounter } =
  boardSlice.actions;

export const resetGame = () => (dispatch) => {
  dispatch(setBoard(["", "", "", "", "", "", "", "", ""]));
  dispatch(setPlayer(""));
  dispatch(setWinner(""));
  dispatch(setTurnsCounter(0));
};

export default boardSlice.reducer;
