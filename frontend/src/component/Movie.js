import React from "react";
import Base from "./Base";
import HomeCarousel from "./HomeCarousel";

function Movie() {
  let filter = {
    Languages: ["Hindi", "English", "Kannada", "Bengali", "Marathi", "Tamil"],
    Categories: ["Theater", "Story Telling", "Improv Theater"],
    Genre: ["Drama", "Fantacy", "Classic", "Comedy"],
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
        <Base tab="movies" filter={filter} />
      </div>
    </>
  );
}

export default Movie;
