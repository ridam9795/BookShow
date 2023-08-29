import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import background from "../background.webp";

function MovieDetail() {
  const { showID } = useParams();
  const api_end_point =
    process.env.REACT_APP_MODE == "development"
      ? "http://localhost:8000"
      : process.env.REACT_APP_API_URL;
  axios.defaults.baseURL = api_end_point;
  const [currMovie, setCurrMovie] = useState({});
  const [notFound, setNotFound] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchMovieDetail();
  }, [showID]);
  const fetchMovieDetail = async () => {
    setNotFound("Loading..");
    try {
      let movieData = await axios.get(`/movieDetail/${showID}`);

      if (!movieData.data.data.Error) {
        setCurrMovie(movieData.data.data);
        setNotFound("");
      } else {
        setNotFound("INVALID IMDB ID");
        setCurrMovie({});
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log("Error: ", err);
    }
  };
  return (
    <div style={{ height: "100vh" }} className="vh-100 bg-dark">
      {notFound.length > 0 ? (
        loading == true ? (
          <div className=" d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        ) : (
          <div>
            <img src="https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg" />
          </div>
        )
      ) : (
        <div className="row justify-content-center  bg-dark">
          <div className="col-3 mx-4 mt-4 ">
            <img src={currMovie.Poster} alt={currMovie.Title} heigth="100%" />
          </div>
          <div className="col-7 mx-4 mt-4 text-white bg-dark">
            <h2>{currMovie.Title}</h2>
            <div className="container my-4">
              <p>Released : {currMovie.Released}</p>
              <p>Genre : {currMovie.Genre}</p>
              <p>Runtime : {currMovie.Runtime}</p>
              <p>Director : {currMovie.Director}</p>
              <p>Writer : {currMovie.Writer}</p>
              <p>Actors : {currMovie.Actors}</p>
              <p>Plot : {currMovie.Plot}</p>
              <p>Language : {currMovie.Language}</p>
              <p>Country : {currMovie.Country}</p>
              <p>imdbRating : {currMovie.imdbRating}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
