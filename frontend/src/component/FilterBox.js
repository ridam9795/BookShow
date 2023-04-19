import React, { useState } from "react";

function FilterBox(props) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const onActive = {
    backgroundColor: "#eb4034",
    color: "#fff",
    border: "1px solid #8e918f",
    width: "auto",
    display: "inline",
    padding: "5px 8px",
    cursor: "pointer",
  };
  const onInActive = {
    border: "1px solid #8e918f",
    width: "auto",
    display: "inline",
    padding: "5px 8px",
    color: "#eb4034",
  };
  return (
    <div style={{ margin: "10px" }}>
      <p
        style={isActive || isHover ? onActive : onInActive}
        onClick={() => setIsActive(!isActive)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.name}
      </p>
    </div>
  );
}

export default FilterBox;
