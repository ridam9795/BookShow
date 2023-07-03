import React, { useEffect, useState } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import FilterBox from "./FilterBox";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { SiteState } from "../Context/BookShowProvider";

function FilterAccordion(props) {
  const location = useLocation();
  const navigate = useNavigate();
  axios.defaults.baseURL = "http://localhost:8000";
  const [movieQuery, setMovieQuery] = useState({
    Languages: [],
    Categories: [],
    Genre: [],
  });
  const [eventQuery, setEventQuery] = useState({
    Languages: [],
    Categories: [],
  });
  const [sportQuery, setSportQuery] = useState({
    Categories: [],
    Prices:[]
  });
  const [activityQuery, setActivityQuery] = useState({
    Categories: [],
    Prices:[]
  });
  const {setMovies,setEvents,setSports,setActivities}=SiteState()
  useEffect(()=>{
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
      if (query.length !== 0) {

        navigate("/?" + query);
        filterMovies(query);
      }
    }else if (location.pathname === "/events") {
      let lang =
      eventQuery.Languages.length > 0 ? eventQuery.Languages.join("|") : "";
      let query = "";
      if (lang !== "") {
        query += "languages=" + lang;
      }
      let cat =
      eventQuery.Categories.length > 0 ? eventQuery.Categories.join("|") : "";
      if (cat !== "") {
        if (query.length > 0) {
          query += "&categories=" + cat;
        } else {
          query += "categories=" + cat;
        }
      }
      if (query.length !== 0) {

        navigate("/events?" + query);
        filterEvents(query);
      }
    }else  if (location.pathname === "/sports") {
      let Prices =
      sportQuery.Prices.length > 0 ? sportQuery.Prices.join("|") : "";
      let query = "";
      if (Prices !== "") {
        query += "prices=" + Prices;
      }
      let cat =
      sportQuery.Categories.length > 0 ? sportQuery.Categories.join("|") : "";
      if (cat !== "") {
        if (query.length > 0) {
          query += "&categories=" + cat;
        } else {
          query += "categories=" + cat;
        }
      }
      if (query.length !== 0) {

        navigate("/sports?" + query);
        filterSports(query);
      }
    }else if (location.pathname === "/activities") {
      let Prices =
      activityQuery.Prices.length > 0 ? activityQuery.Prices.join("|") : "";
      let query = "";
      if (Prices !== "") {
        query += "prices=" + Prices;
      }
      let cat =
      activityQuery.Categories.length > 0 ? activityQuery.Categories.join("|") : "";
      if (cat !== "") {
        if (query.length > 0) {
          query += "&categories=" + cat;
        } else {
          query += "categories=" + cat;
        }
      }
      if (query.length !== 0) {
        navigate("/activities?" + query);
        filterActivities(query);
      }
    
    }

  },[location.pathname,movieQuery.Languages,
    movieQuery.Categories,
    movieQuery.Genre, eventQuery.Languages,
    eventQuery.Categories, sportQuery.Prices,
    sportQuery.Categories,activityQuery.Prices,
    activityQuery.Categories,])

  const filterMovies = async (query) => {
    let fetchMovie = await axios.get(`/filterMovies/?${query}`);

    console.log(fetchMovie.data.filteredMovieData);
    setMovies(fetchMovie.data.filteredMovieData)
  };
  const filterEvents = async (query) => {
    let fetchEvents = await axios.get(`/filterEvents/?${query}`);

    console.log(fetchEvents.data.filteredEventData);
    setEvents(fetchEvents.data.filteredEventData)
  };
  const filterSports = async (query) => {
    let fetchSports = await axios.get(`/filterSports/?${query}`);

    console.log(fetchSports.data.filteredSportData);
    setSports(fetchSports.data.filteredSportData)
  };
  const filterActivities = async (query) => {
    let fetchActivities = await axios.get(`/filterActivities/?${query}`);

    console.log(fetchActivities.data.filteredActivityData);
    setActivities(fetchActivities.data.filteredActivityData)
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
                    setEventQuery={setEventQuery}
                    eventQuery={eventQuery}
                    sportQuery={sportQuery}
                    setSportQuery={setSportQuery}
                    activityQuery={activityQuery}
                    setActivityQuery={setActivityQuery}
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
