import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";


describe("App should", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
