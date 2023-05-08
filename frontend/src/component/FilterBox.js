import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FilterBox(props) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // console.log("useEffect");
    // console.log(props.movieQuery);
  }, [isActive, props.movieQuery]);

  const handleFilter = () => {
    if (location.pathname === "/") {
      if(!isActive){
        setIsActive(!isActive);
        props.setMovieQuery({
          ...props.movieQuery,
          [props.category]: [...props.movieQuery[props.category], props.name],
        });
      }else{
        setIsActive(!isActive);
        let alteredCategory=props.movieQuery[props.category].filter((movieName)=>{
          return movieName!=props.name;
        })
        props.setMovieQuery({
          ...props.movieQuery,
         [props.category]:alteredCategory
        })

      }
    
    } else if (location.pathname === "/events") {
      if(!isActive){
        setIsActive(!isActive);
        props.setEventQuery({
          ...props.eventQuery,
          [props.category]: [...props.eventQuery[props.category], props.name],
        });
      }else{
        setIsActive(!isActive);
        let alteredCategory=props.eventQuery[props.category].filter((eventName)=>{
          return eventName!=props.name;
        })
        props.setEventQuery({
          ...props.eventQuery,
         [props.category]:alteredCategory
        })

      }
    
    } else if (location.pathname === "/sports") {
      if(!isActive){
        setIsActive(!isActive);
        props.setSportQuery({
          ...props.sportQuery,
          [props.category]: [...props.sportQuery[props.category], props.name],
        });
      }else{
        setIsActive(!isActive);
        let alteredCategory=props.sportQuery[props.category].filter((sportName)=>{
          return sportName!=props.name;
        })
        props.setSportQuery({
          ...props.sportQuery,
         [props.category]:alteredCategory
        })

      }
    } else if (location.pathname === "/activities") {
      if(!isActive){
        setIsActive(!isActive);
        props.setActivityQuery({
          ...props.activityQuery,
          [props.category]: [...props.activityQuery[props.category], props.name],
        });
      }else{
        setIsActive(!isActive);
        let alteredCategory=props.activityQuery[props.category].filter((activityName)=>{
          return activityName!=props.name;
        })
        props.setActivityQuery({
          ...props.activityQuery,
         [props.category]:alteredCategory
        })

      }
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
