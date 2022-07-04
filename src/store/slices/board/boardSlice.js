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
    resetBoard: (state) => {
      state.board = ["", "", "", "", "", "", "", "", ""];
      state.turnsCounter = 0;
      state.winner = "";
      state.player = "";
    },
  },
});

export const { setBoard, setPlayer, setWinner, setTurnsCounter,resetBoard} = boardSlice.actions;

export default boardSlice.reducer;
