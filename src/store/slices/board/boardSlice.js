import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    plays: ["", "", "", "", "", "", "", "", ""],
    winner: "",
    player: "X",
  },
  reducers: {
    setPlays: (state, action) => {
      state.plays = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
    swapPlayer: (state) => {
      state.player = state.player === "X" ? "O" : "X";
    },
  },
});

export const { setPlays } = boardSlice.actions;

export const handlePlays = (plays) => (dispatch) => {
  dispatch(setPlays(plays));
};


export default boardSlice.reducer;
