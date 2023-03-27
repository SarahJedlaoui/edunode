import React from "react";
import ReactDOM from "react-dom";

import InputForm from "./InputForm/index";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <InputForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
