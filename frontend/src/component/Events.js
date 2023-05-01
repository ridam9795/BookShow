import React from "react";
import Base from "./Base";

function Events() {
  let filter = {
    Languages: ["Hindi", "English", "Kannada", "Bengali", "Marathi", "Tamil"],
    Categories: ["Comedy Shows", "Workshops", "Music Shows","Online Streaming Events","Meetups","Kids"],
  };
  return (
    <div
      style={{ minHeight: "100%", height: "auto", backgroundColor: "#f0f0f0" }}
    >
      <Base tab="events" filter={filter} />
    </div>
  );
}

export default Events;
