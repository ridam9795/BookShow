import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FilterBox(props) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("useEffect");
    console.log(props.movieQuery);
  }, [isActive, props.movieQuery]);

  const handleFilter = () => {
    setIsActive(!isActive);
    if (location.pathname === "/") {
      props.setMovieQuery({
        ...props.movieQuery,
        [props.category]: [...props.movieQuery[props.category], props.name],
      });
    } else if (location.pathname === "/events") {
    } else if (location.pathname === "/sports") {
    } else if (location.pathname === "/activities") {
    }
  };
  const onActive = {
    border: "0.1px solid #8e918f",
    backgroundColor: "#eb4034",
    color: "#fff",
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
    cursor: "pointer",
  };
  return (
    <div style={{ margin: "10px" }}>
      <p
        style={isActive || isHover ? onActive : onInActive}
        onClick={handleFilter}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {props.name}
      </p>
    </div>
  );
}

export default FilterBox;
