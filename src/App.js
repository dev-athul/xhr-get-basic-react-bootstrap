import React from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import XhrRequest from "./components/XMLHttpRequest/xhrRequest";
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
  
        <XhrRequest />
        <Footer/>
    </React.Fragment>
  );
};

export default App;
