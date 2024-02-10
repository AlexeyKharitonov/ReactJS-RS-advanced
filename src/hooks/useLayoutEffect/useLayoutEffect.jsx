import { useLayoutEffect, useState, useEffect } from "react";
import "./App.css";

function App2() {
  // useEffect(() => {
  //   console.log("## App2 ##: componentDidMount");

  //   return () => {
  //     console.log("## App2 ##: componentWillUnmount");
  //   };
  // }, []);

  return (
    <>
      <div id="box">SHOW BOX</div>
      <h2>Some Title!</h2>
    </>
  );
}

function App() {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (!visible) {
      return;
    }

    const btnElement = document.getElementById("btn");
    const { bottom } = btnElement.getBoundingClientRect();
    const boxEl = document.getElementById("box");
    boxEl.style.top = `${bottom - 25}px`;
  }, [visible]);

  useEffect(() => {
    console.log("####: useEffect 1");
  });

  useLayoutEffect(() => {
    console.log("####: useLayoutEffect 1");
  });

  useEffect(() => {
    console.log("####: useEffect 2");
  });

  useLayoutEffect(() => {
    console.log("####: useLayoutEffect 2");
  });

  const style = {
    background: "black",
    position: "relative",
    top: "10px",
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button id="btn" onClick={() => setVisible((s) => !s)}>
            {visible ? "Hide" : "Show"}
          </button>
          {visible && (
            <div style={style} id="box">
              <App2 />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
