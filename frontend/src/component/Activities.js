import React from "react";
import Base from "./Base";

function Activities() {
  let filter = {
    Categories: [
      "Adventure",
      "Nightlife",
      "Tourist Attractions",
      "Food and Drinks",
      "Parties",
      "Festivals",
      "Gaming",
    ],
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
