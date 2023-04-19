import React from "react";
import Base from "./Base";

function Events() {
  let filter = {
    Languages: [
      "Hindi",
      "English",
      "Kannada",
      "Bengali",
      "Marathi",
      "Tamil",
      "Japanese",
      "Malyalam",
    ],
    Genre: ["Drama", "Fantacy", "Classic", "Comedy", "Action", "Thriller"],
  };
  return (
    <div
      style={{ minHeight: "100%", height: "auto", backgroundColor: "#f0f0f0" }}
    >
      <Base tab="Events" filter={filter} />
    </div>
  );
}

export default Events;
