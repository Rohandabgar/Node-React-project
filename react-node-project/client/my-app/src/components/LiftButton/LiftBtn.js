import React from "react";
import classes from "./LiftBtn.module.css";
import Buttons from "./Buttons";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const LiftBtn = (props) => {
  return (
    <div>
      <div className={classes.liftCounter}>
        <div className={classes.floor}>{props.floorCount}</div>
        <div className={classes.arrow}>
          {props.arrowUp ? <FiArrowUp /> : <FiArrowDown />}
        </div>
      </div>
      <Buttons onClick={props.onBtnClick} isActive={props.isActive}></Buttons>
    </div>
  );
};
export default LiftBtn;
