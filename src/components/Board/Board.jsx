import "./board.css";

export const Board = () => {
  return (
    <>
      <div className="parent">
        <div id="0" className="child top-row-position-left"></div>
        <div id="1" className="child top-row-position-middle"></div>
        <div id="2" className="child top-row-position-right"></div>
        <div id="3" className="child middle-row-position-left"></div>
        <div id="4" className="child middle-row-position-middle"></div>
        <div id="5" className="child middle-row-position-right"></div>
        <div id="6" className="child bottom-row-position-left"></div>
        <div id="7" className="child bottom-row-position-middle"></div>
        <div id="8" className="child bottom-row-position-right"></div>
      </div>
    </>
  );
};
