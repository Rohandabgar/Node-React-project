import React, { useEffect, useState } from "react";

import LiftBtn from "./components/LiftButton/LiftBtn";
import LiftIndicator from "./components/LiftIndicator/LiftIndicator";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [liftIsActive, setLiftIsActive] = useState(false);
  const [indicateIsUp, setIndicateIsUp] = useState(true);
  const [sendRequest, setSendRequest] = useState(false);

  const countFloorHandler = (count) => {
    setSelectedFloor(count + 1);
    setSendRequest(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedFloor > currentFloor) {
        console.log(selectedFloor);
        if (count < selectedFloor) {
          setLiftIsActive(true);
          setCount(count + 1);
          setIndicateIsUp(true);
        } else {
          setCurrentFloor(selectedFloor);
          clearInterval(interval);
          setLiftIsActive(false);
        }
      } else if (selectedFloor < currentFloor) {
        console.log(selectedFloor);
        if (count > selectedFloor) {
          setLiftIsActive(true);
          setIndicateIsUp(false);
          setCount(count - 1);
        } else {
          setCurrentFloor(selectedFloor);
          clearInterval(interval);
          setLiftIsActive(false);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count, selectedFloor, currentFloor]);

  return (
    <div className="center">
      <LiftBtn
        onBtnClick={countFloorHandler}
        floorCount={count}
        isActive={liftIsActive}
        arrowUp={indicateIsUp}
      />
      <LiftIndicator floor={selectedFloor} />
    </div>
  );
}

export default App;
