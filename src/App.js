import React from "react";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import logo from "./logo.svg";
import "./App.css";

const navlinks = [
  { name: "Home", to: "#/" },
  { name: "About", to: "#/about" },
  { name: "Contact", to: "#/contact" },
];

const brand = { name: "Jesse McKinney", to: "/" };

function App() {
  return (
    <div className="App">
      <MyNavBar brand={brand} links={navlinks} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
