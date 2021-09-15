import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-primary ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
