import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import Base from "./Base";

axios.defaults.baseURL = "http://localhost:8000";
function Movie() {
  return (
    <div
      style={{ minHeight: "100%", height: "auto", backgroundColor: "#f0f0f0" }}
    >
      <Base tab="Movies" />
    </div>
  );
}

export default Movie;
