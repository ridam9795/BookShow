import React, { useEffect, useState } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import FilterBox from "./FilterBox";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function FilterAccordion(props) {
  const location = useLocation();
  const navigate = useNavigate();
  axios.defaults.baseURL = "http://localhost:8000";
  const [movieQuery, setMovieQuery] = useState({
    Languages: [],
    Categories: [],
    Genre: [],
  });
  useEffect(() => {
    if (location.pathname === "/") {
      let lang =
        movieQuery.Languages.length > 0 ? movieQuery.Languages.join("|") : "";
      let query = "";
      if (lang !== "") {
        query += "languages=" + lang;
      }
      let cat =
        movieQuery.Categories.length > 0 ? movieQuery.Categories.join("|") : "";
      if (cat !== "") {
        if (query.length > 0) {
          query += "&categories=" + cat;
        } else {
          query += "categories=" + cat;
        }
      }
      let gen = movieQuery.Genre.length > 0 ? movieQuery.Genre.join("|") : "";
      if (gen !== "") {
        if (query.length > 0) {
          query += "&genre=" + gen;
        } else {
          query += "genre=" + gen;
        }
      }

      navigate("/?" + query);
      filterMovies(query);
    }
  }, [
    location.pathname,
    movieQuery.Languages,
    movieQuery.Categories,
    movieQuery.Genre,
  ]);
  const filterMovies = async (query) => {
    let fetchMovie = await axios.get(`/filterMovies/?${query}`);

    console.log(fetchMovie);
  };
  return (
    <MDBAccordion borderless initialActive={0}>
      {Object.keys(props.filter).map((category, index) => {
        return (
          <MDBAccordionItem
            collapseId={index + 1}
            headerTitle={category}
            className="my-2"
            key={index}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexFlow: "wrap",
              }}
              key={index}
            >
              {props.filter[category].map((item, i) => {
                return (
                  <FilterBox
                    movieQuery={movieQuery}
                    setMovieQuery={setMovieQuery}
                    category={category}
                    name={item}
                    key={i}
                  />
                );
              })}
            </div>
          </MDBAccordionItem>
        );
      })}
    </MDBAccordion>
  );
}
export default FilterAccordion;
