import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Result from "./result/result";
import ChangeColor from "./changeColor/changeColor";
import ChangeSize from "./changeSize/changeSize";
import Reset from "./reset";
import ContextProvider from "./contexts/contextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="change">
          <ChangeColor />
          <ChangeSize />
        </div>
        <Reset />
        <Result />
      </div>
    </ContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
