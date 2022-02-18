import React, { useState, useEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import BrowserWidthComponent from './components/BrowserWidthComponent';
import './App.css';
import AppContext from './context/AppContext';

function App() {

  const [divHeight, setHeight] = useState();

  const setting = {
    divHeight : divHeight,
    setHeight,
  }

  const setDivHeight = () => {
    let dynamicHeight = document.getElementById('div-app-height').value;
    setHeight(dynamicHeight);
    document.getElementById('mainDiv').style.height =  dynamicHeight+'px';
  }

  return (
    <AppContext.Provider value={setting}>
       <input id = "div-app-height" onKeyPress={setDivHeight} placeholder='set Div Height globally' ></input>
       <BrowserWidthComponent />
    </AppContext.Provider>
    
  );
}

export default App;