import React from "react";

import classes from "./LiftIndicator.module.css";
const LiftIndicator = (props) => {
  const indictor = Array.from({ length: props.floor }, (_, index) => (
    <div key={index} className={classes.indictor}></div>
  ));
  return <div className={classes.indictor_container}>{indictor}</div>;
};

export default LiftIndicator;
