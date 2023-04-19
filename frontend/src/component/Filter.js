import React from "react";
import FilterAccordion from "./FilterAccordion";

function Filter() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-3">
          <h3>Filters</h3>
          <div className="h-100 bg-white">
            <FilterAccordion />
          </div>
        </div>
        <div className="col-8">Right </div>
      </div>
    </div>
  );
}

export default Filter;
