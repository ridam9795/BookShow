import React, { useEffect, useState } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import FilterBox from "./FilterBox";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { SiteState } from "../Context/BookShowProvider";

function FilterAccordion(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { setCardData, setItemCount } = SiteState();
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
    Prices: [],
  });
  const [activityQuery, setActivityQuery] = useState({
    Categories: [],
    Prices: [],
  });
  const { setEvents, setSports, setActivities } = SiteState();
  useEffect(() => {
    if (location.pathname === "/movies") {
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
      navigate("/movies?" + query);
      filterMovies(query);
    } else if (location.pathname === "/events") {
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
      navigate("/events?" + query);
      filterEvents(query);
    } else if (location.pathname === "/sports") {
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
      navigate("/sports?" + query);
      filterSports(query);
    } else if (location.pathname === "/activities") {
      let Prices =
        activityQuery.Prices.length > 0 ? activityQuery.Prices.join("|") : "";
      let query = "";
      if (Prices !== "") {
        query += "prices=" + Prices;
      }
      let cat =
        activityQuery.Categories.length > 0
          ? activityQuery.Categories.join("|")
          : "";
      if (cat !== "") {
        if (query.length > 0) {
          query += "&categories=" + cat;
        } else {
          query += "categories=" + cat;
        }
      }
      navigate("/activities?" + query);
      filterActivities(query);
    }
  }, [
    location.pathname,
    movieQuery.Languages,
    movieQuery.Categories,
    movieQuery.Genre,
    eventQuery.Languages,
    eventQuery.Categories,
    sportQuery.Prices,
    sportQuery.Categories,
    activityQuery.Prices,
    activityQuery.Categories,
  ]);

  const filterMovies = async (query) => {
    try {
      let fetchMovie = await axios.get(`/filterMovies/?${query}&page_size=2`);
      if (fetchMovie.data) {
        console.log("fetchMovie data:", fetchMovie.data);
        const page_size = parseInt(
          Math.ceil(fetchMovie.data.count / fetchMovie.data.results.length)
        );
        setItemCount(page_size);

        setCardData(fetchMovie.data);
      }
    } catch (err) {
      console.log("Error occured", err);
    }
  };
  const filterEvents = async (query) => {
    try {
      let fetchEvents = await axios.get(`/filterEvents/?${query}&page_size=2`);
      if (fetchEvents.data) {
        console.log("fetchEvents data:", fetchEvents.data);
        const page_size = parseInt(
          Math.ceil(fetchEvents.data.count / fetchEvents.data.results.length)
        );
        setItemCount(page_size);

        setCardData(fetchEvents.data);
      }
    } catch (err) {
      console.log("Error occured", err);
    }
  };
  const filterSports = async (query) => {
    try {
      let fetchSports = await axios.get(`/filterSports/?${query}&page_size=2`);
      if (fetchSports.data) {
        console.log("fetchSports data:", fetchSports.data);
        const page_size = parseInt(
          Math.ceil(fetchSports.data.count / fetchSports.data.results.length)
        );
        setItemCount(page_size);

        setCardData(fetchSports.data);
      }
    } catch (err) {
      console.log("Error occured", err);
    }
  };
  const filterActivities = async (query) => {
    try {
      let fetchActivities = await axios.get(
        `/filterActivities/?${query}&page_size=2`
      );
      if (fetchActivities.data) {
        console.log("fetchActivities data:", fetchActivities.data);
        const page_size = parseInt(
          Math.ceil(
            fetchActivities.data.count / fetchActivities.data.results.length
          )
        );
        setItemCount(page_size);

        setCardData(fetchActivities.data);
      }
    } catch (err) {
      console.log("Error occured", err);
    }
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
