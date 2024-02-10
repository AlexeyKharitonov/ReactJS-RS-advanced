import { useEffect, useState } from "react";
import "./App.css";

// function App3() {
//   useEffect(() => {
//     console.log("## App3 ##: componentDidMount");

//     return () => {
//       console.log("## App3 ##: componentWillUnmount");
//     };
//   }, []);

//   return <h2>This is title 2</h2>;
// }

function App2() {
  // useEffect(() => {
  //   console.log("## App2 ##: componentDidMount");

  //   return () => {
  //     console.log("## App2 ##: componentWillUnmount");
  //   };
  // }, []);

  useEffect(() => {
    const boxEl = document.getElementById("box");
    boxEl.innerText = 0;
  }, []);

  return <div id="box">SHOW BOX</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  // useEffect(() => {
  //   console.log("## App ##: componentDidMount");
  // }, []);

  // useEffect(() => {
  //   console.log("####: subscribe count");

  //   return () => {
  //     console.log("####: unsubscribe count");
  //   };
  // }, [count]);

  // useEffect(() => {
  //   console.log("## App ##: componentWillUpdate");
  // });

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-counter">{count}</p>
        <div>
          <button onClick={() => setCount((s) => s + 1)}>Click</button>
          <button onClick={() => setVisible((s) => !s)}>Hide</button>
        </div>
        {visible && <App2 />}
      </header>
    </div>
  );
}

export default App;
