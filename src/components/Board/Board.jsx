import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBoard,
  getWinner,
  getPlayer,
  getTurnsCounter,
} from "../../store/slices/board/selectors";
import {
  setBoard,
  setWinner,
  setPlayer,
  setTurnsCounter,
} from "../../store/slices/board/boardSlice";
import { game } from "./tic-tac-toe";
import "./board.css";



export const Board = () => {
  const dispatch = useDispatch();
  const turnsCounter = useSelector(getTurnsCounter);
  const board = useSelector(getBoard);
  const winner = useSelector(getWinner);
  const currentPlayer = useSelector(getPlayer);
  const random = Math.floor(Math.random() * 2);

  useEffect(() => {
    if (currentPlayer === "") {
      getRandomPlayer();
    }
    const checkGame = () => {
      const result = game(board, turnsCounter);
      if (result) {
        dispatch(setWinner(result));
      }
    };
    checkGame();

    function getRandomPlayer() {
      if (random !== 1) {
        dispatch(setPlayer("X"));
      } else {
        dispatch(setPlayer("O"));
      }
    }
  }, [board, turnsCounter, currentPlayer, random, dispatch]);

  const handleGame = (e) => {
    let index = e.target.id;
    let newBoard = [...board];
    if (winner) return;
    if (newBoard[index] === "") {
      newBoard[index] = currentPlayer;
      dispatch(setBoard(newBoard));
      swapPlayer();
      dispatch(setTurnsCounter(turnsCounter + 1));
    }
  };

  const swapPlayer = () => {
    dispatch(setPlayer(currentPlayer === "X" ? "O" : "X"));
  };

  

  return (
    <>
      <div className="board">
        <div
          id="0"
          role="button"
          onClick={handleGame}
          className="child top-row-position-left"
        >
          {board[0]}
        </div>
        <div
          id="1"
          role="button"
          onClick={handleGame}
          className="child top-row-position-middle"
        >
          {board[1]}
        </div>
        <div
          id="2"
          role="button"
          onClick={handleGame}
          className="child top-row-position-right"
        >
          {board[2]}
        </div>
        <div
          id="3"
          role="button"
          onClick={handleGame}
          className="child middle-row-position-left"
        >
          {board[3]}
        </div>
        <div
          id="4"
          role="button"
          onClick={handleGame}
          className="child middle-row-position-middle"
        >
          {board[4]}
        </div>
        <div
          id="5"
          role="button"
          onClick={handleGame}
          className="child middle-row-position-right"
        >
          {board[5]}
        </div>
        <div
          id="6"
          role="button"
          onClick={handleGame}
          className="child bottom-row-position-left"
        >
          {board[6]}
        </div>
        <div
          id="7"
          role="button"
          onClick={handleGame}
          className="child bottom-row-position-middle"
        >
          {board[7]}
        </div>
        <div
          id="8"
          role="button"
          onClick={handleGame}
          className="child bottom-row-position-right"
        >
          {board[8]}
        </div>
      </div>
    </>
  );
};
