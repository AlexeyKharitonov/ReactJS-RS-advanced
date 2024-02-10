import { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);

  console.log("####: first render");

  console.log("####: ref", ref);

  const style = {
    padding: "12px",
    background: "red",
  };

  const handleClick = () => {
    if (useRef !== null) {
      ref.current.style.width = `${ref.current.offsetWidth * 2}px`;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click</button>
        <div ref={ref} style={style}>
          Box
        </div>
      </header>
    </div>
  );
}

export default App;
