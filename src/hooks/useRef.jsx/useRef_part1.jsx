import { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("####: countRef", countRef);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counte state: {count}</p>
        <p>Counte ref: {countRef.current}</p>
        <button onClick={() => setCount((p) => p + 1)}>Click Count</button>
        <button onClick={() => (countRef.current = countRef.current + 1)}>
          Click Count Ref
        </button>
      </header>
    </div>
  );
}

export default App;
