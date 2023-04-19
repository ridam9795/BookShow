import React from "react";
import Base from "./Base";

function sports() {
  let filter = {
    Date: ["Today", "Tomorrow", "This weekend"],
    Categories: ["Cricket", "Online Games", "E sports", "Football", "Chess"],
  };
  return (
    <div
      style={{ minHeight: "100%", height: "auto", backgroundColor: "#f0f0f0" }}
    >
      <Base tab="Sports" filter={filter} />
    </div>
  );
}

export default sports;
