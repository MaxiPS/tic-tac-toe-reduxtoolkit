import React, { Component } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Board } from "./Board";
import userEvent from "@testing-library/user-event";

describe("Board should", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
  });

  it("be render the mark of the player who clicked", () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
    const cells = screen.getAllByRole("button");
    fireEvent.click(cells[0]);
    /* screen.debug(); */
    expect(cells[0]).toHaveTextContent(/X|O/i);
  });
});
