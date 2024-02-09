import { useState } from "react";
import "./App.css";

function Greeting() {
  return <h1>Приветствую!</h1>;
}

function Bye() {
  return <h1>Пока!</h1>;
}

function App() {
  const [isShow, setShow] = useState(undefined);

  // let component;

  // if (isShow) {
  //   component = <Greeting />;
  // } else {
  //   component = <Bye />;
  // }

  // if (isShow) {
  //   return <Greeting />;
  // }

  switch (isShow) {
    case true:
      return (
        <>
          <Greeting />
          <button onClick={() => setShow((s) => !s)}>Click</button>
        </>
      );
    case false:
      return (
        <>
          <Bye />
          <button onClick={() => setShow((s) => !s)}>Click</button>
        </>
      );
    default:
      return (
        <div className="App">
          <header className="App-header">
            {/* {isShow ? <Greeting /> : <Bye />} */}
            {/* {isShow ? <Greeting /> : null}  */}
            {/* {isShow && <Greeting />} */}
            {/* {component} */}
            <button onClick={() => setShow((s) => !s)}>Click</button>
          </header>
        </div>
      );
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* {isShow ? <Greeting /> : <Bye />} */}
        {/* {isShow ? <Greeting /> : null}  */}
        {/* {isShow && <Greeting />} */}
        {/* {component} */}
        <button onClick={() => setShow((s) => !s)}>Click</button>
      </header>
    </div>
  );
}

export default App;
