import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MovieCard from "./Card";
import Base from "./Base";

axios.defaults.baseURL = "http://localhost:8000";
function Movie() {
  let filter = {
    Date: ["Today", "Tomorrow", "This weekend"],
    Languages: ["Hindi", "English", "Kannada", "Bengali", "Marathi", "Tamil"],
    Categories: ["Theater", "Story Telling", "Improv Theater"],
    Genre: ["Drama", "Fantacy", "Classic", "Comedy"],
  };

  return (
    <div
      style={{ minHeight: "100%", height: "auto", backgroundColor: "#f0f0f0" }}
    >
      <Base tab="movies" filter={filter} />
    </div>
  );
}

export default Movie;
