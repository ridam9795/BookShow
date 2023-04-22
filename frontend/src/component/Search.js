import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { SiteState } from "../Context/BookShowProvider";
import Card from "./Card";
function Search() {
  const { movies, events, sports, activities } = SiteState();

  const location = useLocation();
  let query = queryString.parse(location.search);
  console.log("Query", query);
  return (
    <div className="container my-5">
      <h1>
        SEARCH RESULTS FOR :{" "}
        <span className="text-uppercase text-success">{query.name}</span>
      </h1>
      <div className="row">
        {movies?.map((movie, index) => {
          return (
            <div className="col-3 my-4" key={"movie-" + index}>
              <Card cardItem={movie} />
            </div>
          );
        })}
        {events?.map((event, index) => {
          return (
            <div className="col-3 my-4" key={"event-" + index}>
              <Card cardItem={event} />
            </div>
          );
        })}
        {sports?.map((sport, index) => {
          return (
            <div className="col-3 my-4" key={"sport-" + index}>
              <Card cardItem={sport} />
            </div>
          );
        })}
        {activities?.map((activity, index) => {
          return (
            <div className="col-3 my-4" key={"activity-" + index}>
              <Card cardItem={activity} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
