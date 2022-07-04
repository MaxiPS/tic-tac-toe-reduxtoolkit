import { Board } from "./components/Board/Board";
import { useSelector, useDispatch } from "react-redux";
import { getWinner } from "./store/slices/board/selectors";
import { resetBoard } from "./store/slices/board/boardSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const winner = useSelector(getWinner);

  return (
    <div className="board-container">
      <div className="title-container">
        <h1>Tic Tac Toe!</h1>
      </div>
      <div className="winner-container">
        <h2>{winner}</h2>
      </div>
      <Board />
      <div className="button-container">
        <button className="reset-button" onClick={() => dispatch(resetBoard())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
