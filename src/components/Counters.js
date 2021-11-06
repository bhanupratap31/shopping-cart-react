import React from "react";
import Counter from "./Counter";
const Counters = (props) => {
  const { cartItemCount, onIncrement, onDecrement, onReset, onDelete } = props;
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onReset}>
        Reset
      </button>
      {cartItemCount.map((item) => {
        return (
          <Counter
            key={item.id}
            counter={item}
            increase={onIncrement}
            decrease={onDecrement}
            deleteCounter={onDelete}
          />
        );
      })}
    </>
  );
};

export default Counters;
