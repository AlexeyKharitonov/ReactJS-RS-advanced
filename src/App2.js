import { useLocalStorage } from "./useLocalStorage/useLocalStorage";
import { useUpdateLogger } from "./useUpdateLogger.js/useUpdateLogger";
import "./App.css";

function App() {
  const [value, setValue] = useLocalStorage("name", "");

  useUpdateLogger(value);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
