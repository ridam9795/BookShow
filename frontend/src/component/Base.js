import React from "react";
import FilterAccordion from "./FilterAccordion";
import Content from "./Content";

function Base(props) {
  return (
    <div className="container">
      <div className="row p-md-4">
        <div
          className="col-md-3 col-sm-2"
          style={{ backgroundColor: "#f0f0f0", height: "100vh" }}
        >
          <h3>Filters</h3>
          <div className=" py-3">
            <FilterAccordion filter={props.filter} />
          </div>
        </div>
        <div
          className="col-md-9 h-100"
          style={{ backgroundColor: "#f0f0f0", height: "100vh" }}
        >
          <h3>
            {props.tab.charAt(0).toUpperCase() + props.tab.slice(1)} in
            Bangalore
          </h3>
          <Content tab={props.tab} />
        </div>
      </div>
    </div>
  );
}

export default Base;
