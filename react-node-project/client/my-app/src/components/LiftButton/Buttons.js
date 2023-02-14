import React from "react";

import classes from "./LiftBtn.module.css";
import Card from "../Ui/Card";

const Buttons = (props) => {
  //   const btnClickHander = (index) => {
  //     props.onBtnClick(index + 1);
  //   };
  const disableClass = props.isActive ? classes.disabled : classes.btn;
  const buttons = Array.from({ length: 10 }, (_, index) => (
    <button
      key={index}
      className={disableClass}
      onClick={props.onClick.bind(_, index)}
      disabled={props.isActive}
    >
      {" "}
      {index + 1}{" "}
    </button>
  ));

  return (
    <Card className={classes.btnContainer}>
      <div className={classes.liftbtn}>{buttons}</div>
    </Card>
  );
};
export default Buttons;
