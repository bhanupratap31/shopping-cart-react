import React from "react";
import "./styles.css";
const Counter = (props) => {
  const { counter, increase, decrease, deleteCounter } = props;
  return (
    <div className="counter_container">
      <div>
        <span
          className={`badge badge-${
            counter.value === 0 ? "warning" : "primary"
          }`}
        >
          {counter.value === 0 ? "Zero" : counter.value}
        </span>
      </div>
      <div className="btn_container">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => increase(counter)}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => decrease(counter)}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteCounter(counter.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
