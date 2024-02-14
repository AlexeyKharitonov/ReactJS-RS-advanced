import "./App.css";
import { useArray } from "./customHooks/useArray/useArray";

function App() {
  const [values, { push, update, clear, remove, filter }] = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>[{values.join(",")}]</p>
        <button onClick={() => push(values.length)}>Push</button>
        <button onClick={() => update(3, 10)}>Update</button>
        <button onClick={() => remove(3)}>Remove 4 element</button>
        <button onClick={() => remove(4)}>Filter 5 element</button>
        <button onClick={() => clear()}>Clear</button>
      </header>
    </div>
  );
}

export default App;
