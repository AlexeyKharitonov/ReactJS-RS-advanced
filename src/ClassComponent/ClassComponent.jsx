import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log("####: constructor");

    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("####: old state", this.state);
    console.log("####: new State", nextState);

    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("####: componentDidUpdate");
  }

  componentDidMount() {
    console.log("####: componentDidMount");
    this.interval = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
      // console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    console.log("####: componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("####: render");
    return <>Сейчас: {this.state.date}</>;
  }
}

function App() {
  const [clock, setClock] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{clock && <Clock />}</p>
        <button onClick={() => setClock(!clock)}>Show/hide clock</button>
      </header>
    </div>
  );
}

export default App;
