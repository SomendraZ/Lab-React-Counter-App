import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  rootElement
);
