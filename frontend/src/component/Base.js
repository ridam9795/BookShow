import React from "react";
import FilterAccordion from "./FilterAccordion";

function Base(props) {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row p-4">
        <div className="col-4">
          <h3>Filters</h3>
          <div className="h-100 py-3" style={{ backgroundColor: "#f0f0f0" }}>
            <FilterAccordion filter={props.filter} />
          </div>
        </div>
        <div className="col-8">
          <h3>{props.tab} in Bangalore</h3>
        </div>
      </div>
    </div>
  );
}

export default Base;
