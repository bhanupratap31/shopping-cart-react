import React from "react";
import "./styles.css";

const Navbar = (props) => {
  const { count } = props;
  return (
    <div className="nav_container">
      <p>Items</p>
      <span className="badge badge-dark">{count}</span>
    </div>
  );
};

export default Navbar;
