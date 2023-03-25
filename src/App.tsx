import React from "react";
import { FibonacciCounter } from "./components/modules";

import style from "./styles/fibonacci.module.scss";

function App() {
  return (
    <div className={style.container}>
      <FibonacciCounter />
    </div>
  );
}

export default App;
