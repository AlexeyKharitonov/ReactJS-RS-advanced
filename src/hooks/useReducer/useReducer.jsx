import { useReducer } from "react";
import "./App.css";

const initState = {
  count: 0,
  name: "Alexey",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count - action.payload,
      };
    case "DESC":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };

    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };

    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log("####: state", state);

  const handleMinusClick = () => {
    dispatch({
      type: "INC",
      payload: 10,
    });
  };

  const handlePlusClick = () => {
    dispatch({
      type: "DESC",
      payload: 5,
    });
  };

  const handleResetClick = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleNameClick = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: "Nastya",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-counter">{state.count}</div>
        <div className="App-wrap">
          <button className="App-button" onClick={handleMinusClick}>
            -
          </button>
          <button
            className="App-button"
            onClick={handleResetClick}
            style={{ width: "70px" }}
          >
            Reset
          </button>
          <button className="App-button" onClick={handlePlusClick}>
            +
          </button>
          <button
            className="App-button"
            onClick={handleNameClick}
            style={{ width: "70px" }}
          >
            Name
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
