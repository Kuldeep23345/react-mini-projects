import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    if (counter < 10) setCounter(counter + 1);
  }
  function decrement() {
    if (counter > 0) setCounter(counter - 1);
  }
  return (
    <>
      <div className="main">
        <div className="container">
          <h2>{counter}</h2>
          <button onClick={increment} className="increment">
            +
          </button>
          <button onClick={decrement} className="decrement">
            -
          </button>
          <p>{counter} </p>
        </div>
      </div>
    </>
  );
}

export default App;
