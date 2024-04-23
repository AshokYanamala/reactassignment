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
      <div className="counter-card">
        <h1 className="card-title">Counter</h1>
        <div className="button-group">
          <button
            className={`counter-button increment-button ${
              buttonClicked === "increment" ? "clicked" : ""
            }`}
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className={`counter-button decrement-button ${
              buttonClicked === "decrement" ? "clicked" : ""
            }`}
            onClick={handleDecrement}
            disabled={count === 0}
          >
            Decrement
          </button>
          <button
            className={`counter-button reset-button ${
              buttonClicked === "reset" ? "clicked" : ""
            }`}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <p className={`count-text ${buttonClicked === "reset" ? "reset" : ""}`}>
          {count}
        </p>
      </div>
    </div>
  );
};

export default Counter;
