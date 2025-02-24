import React from "react";
import './Preload.scss';

function Preload(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preload;