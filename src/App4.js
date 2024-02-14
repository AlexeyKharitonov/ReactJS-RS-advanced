import { useEffect, useState } from "react";
import "./App.css";
import { useUpdateEffect } from "./customHooks/useUpdateEffect/useUpdateEffect";

function App() {
  const [count, setCount] = useState(10);

  useUpdateEffect(() => {
    alert(count);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>

        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
