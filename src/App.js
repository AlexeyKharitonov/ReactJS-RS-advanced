import { useState } from "react";
import "./App.css";
import { useThrottle } from "./customHooks/useThrottle/useThrottle";

function App() {
  const [value, setValue] = useState("");
  const throttledValue = useThrottle(value, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <p>{throttledValue}</p>
      </header>
    </div>
  );
}

export default App;
