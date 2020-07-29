import React from "react";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
// import MyCarousel from "./Components/MyCarousel/MyCarousel";
// import MyFooter from "./Components/MyFooter/MyFooter";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*Collapsing NavBar*/}
      <MyNavBar />
      {/*Collapsing NavBar*/}
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
      {/*Slider Footer*/}
      {/*Slider Footer*/}
    </div>
  );
}

export default App;
