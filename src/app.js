import React, { useState } from "react";
import "./styles.css";
import Breno from "./assets/images/breno.png";

const App = () => {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <img src={Breno} alt="minha foto" />
      <div className="btn btn-danger">ola</div>
      <div className="btn btn-success">ola</div>
      <div className="btn btn-dark">ola</div>
      <div className="btn btn-warning">ola</div>
    </div>
  );
};
export default App;
