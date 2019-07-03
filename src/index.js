import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function count(string) {
  var aCount = 0,
    bCount = 0;

  string.split("").forEach(function(el) {
    if (el === "a") aCount++;
    else bCount++;
  });

  if (aCount === 0 && bCount !== 0) return { b: bCount };
  else if (bCount === 0 && aCount !== 0) return { a: aCount };
  else if (aCount === 0 && bCount === 0) return {};
  else return { a: aCount, b: bCount };
}
