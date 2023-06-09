import React from "react";
import Base from "./Base";
import HomeCarousel from "./HomeCarousel";

function sports() {
  let filter = {
    Categories: ["Cricket", "Online Games", "E sports", "Football", "Chess"],
    Prices: ["Free", "0-500", "501-2000", "Above 2000"],
  };
  return (
    <>
      <HomeCarousel />
      <div
        style={{
          minHeight: "100%",
          height: "auto",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Base tab="sports" filter={filter} />
      </div>
    </>
  );
}

export default sports;
