import React from "react";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import MyCarousel from "./Components/MyCarousel/MyCarousel";
import MyFooter from "./Components/MyFooter/MyFooter";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*Collapsing NavBar*/}
      <MyNavBar />
      {/*Collapsing NavBar*/}

      {/*Carousel*/}
      <MyCarousel />
      {/*Carousel*/}

      {/*Slider Footer*/}
      <MyFooter />
      {/*Slider Footer*/}
    </div>
  );
}

export default App;
