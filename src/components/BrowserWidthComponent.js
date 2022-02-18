import React, {useState, useEffect, useCallback, useContext} from "react";
import AppContext from "../context/AppContext";

export default function BrowserWidthComponent() {

  const [browserWidth, setBrowserWidth] = useState(100);
  const globalState = useContext(AppContext);
  
  const displayWidth = useCallback(() => {
   setBrowserWidth(window.innerWidth);
  }); 

  const setDivHeight = (event) => {
      let dynamicHeight = document.getElementById('div-height').value;
      console.log(dynamicHeight);
      document.getElementById('mainDiv').style.height =  dynamicHeight+'px';
  };

  useEffect(()=>{
   setBrowserWidth(window.innerWidth);
   globalState.setHeight( document.getElementById('mainDiv').style.height);
  }, []);

  useEffect(()=>{
    document.getElementById('div-height').value = globalState.divHeight;
  }, [globalState.divHeight])

  useEffect(() => {
      window.addEventListener('resize', displayWidth, false)
  }, [displayWidth]);


  return(
         <div className="browser-width" id = "mainDiv" >
            <span>
               {browserWidth}
            </span><br/>
            <input id="div-height" onKeyPress={setDivHeight} placeholder="you can set the height of this div." />
         </div>
  )
}

