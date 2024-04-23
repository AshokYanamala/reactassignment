import React, { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
    setButtonClicked("increment");
    setTimeout(() => {
      setButtonClicked(null);
    }, 1000);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setButtonClicked("decrement");
      setTimeout(() => {
        setButtonClicked(null);
      }, 1000);
    }
  };

  const handleReset = () => {
    setCount(0);
    setButtonClicked("reset");
    setTimeout(() => {
      setButtonClicked(null);
    }, 1000);
  };

  return (
    <div className="counter-container">
      {/* <h1 className="text-6xl text-white font-bold">
        Illumina Technology Solutions
      </h1> */}
      <div className="counter-card shadow-2xl shadow-purple-400">
        <h1 className="text-4xl font-bold">Counter</h1>
        <div className="flex justify-center items-center space-x-4 ">
          <button
            className={`counter-button ${
              buttonClicked === "increment" ? "increment-button-clicked" : ""
            }`}
            onClick={handleIncrement}
          >
            Increment
          </button>
          {/* {count > 0 && ( */}
          <button
            className={`counter-button decrement-button ${
              buttonClicked === "decrement" ? "decrement-button-clicked" : ""
            }`}
            onClick={handleDecrement}
            disabled={count === 0} // Disable when count is zero
          >
            Decrement
          </button>
          {/* )} */}
          <button
            className={`counter-button reset-button ${
              buttonClicked === "reset" ? "reset-button-clicked" : ""
            }`}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <p
          className={`count-text ${
            buttonClicked === "reset" ? "text-white" : ""
          }`}
        >
          {count}
        </p>
      </div>
    </div>
  );
};

export default Counter;
