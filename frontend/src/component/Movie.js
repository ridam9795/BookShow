import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import HomeCarousel from "./HomeCarousel";
import Filter from "./Filter";

axios.defaults.baseURL = "http://localhost:8000";
function Movie() {
  const movie_name = useRef();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [notFound, setNotFound] = useState("");
  useEffect(() => {
    navigate("/");
  }, []);
  const handleMovieSearch = async (event) => {
    event.preventDefault();
    let movieName = movie_name.current.value;

    navigate({
      pathname: "/",
      search: "?title=" + movieName + "",
    });
    try {
      let movie_data = await axios.get(`/movie/?title=${movieName}`);
      if (movie_data.data.data) {
        setMovies(movie_data.data.data);
        setNotFound("");
      } else {
        setNotFound("NO MOVIES MATCHES YOUR SEARCH CRITERIA");
        setMovies([]);
      }
    } catch (error) {
      console.log(error);
    }

    movie_name.current.value = "";
  };
  return (
    <div
      style={{ minHeight: "100%", height: "auto", backgroundColor: "#f0f0f0" }}
    >
      <HomeCarousel />
      <Filter />
    </div>
  );
}

export default Movie;
