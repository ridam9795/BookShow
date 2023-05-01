import React from "react";
import Base from "./Base";

function Activities() {
  let filter = {
    Categories: [
      "Adventure",
      "NightLife",
      "Tourist Attractions",
      "Food and Drinks",
      "Parties",
      "Gaming",
    ],
    Prices:["Free","0-500","501-2000","Above 2000"]

  };
  return (
    <div
      style={{ minHeight: "100%", height: "auto", backgroundColor: "#f0f0f0" }}
    >
      <Base tab="activities" filter={filter} />
    </div>
  );
}

export default Activities;
