import { useState } from "react";
import "./App.css";

const ARR = [1, 2, 3, 4, 5];

function App() {
  console.log("####: render");
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    setCount((prevState) => prevState - 1);
  };

  const handlePlusClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-counter">{count}</div>
        <div className="App-wrap">
          <button className="App-button" onClick={handleMinusClick}>
            -
          </button>
          <button className="App-button" onClick={handlePlusClick}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
