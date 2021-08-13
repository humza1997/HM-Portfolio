import React from "react";
import "./style.css";
import shapes from "./images/cool-background.svg";
import shapes2 from "./images/background2.svg";
const Background = () => {
  return (
    <>
      <div id='background'>
        <img id='shapes1' src={shapes}></img>
        <img id='shapes2' src={shapes2}></img>
      </div>
    </>
  );
};

export default Background;
