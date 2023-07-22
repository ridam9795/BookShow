import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SiteState } from "../Context/BookShowProvider";

function Pagination({ page_size, page, prev, next, tab }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCardData, setItemCount } = SiteState();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNext = async () => {
    try {
      let list = await axios.get(next);
      const query = next.split("?")[1];
      navigate("/" + tab + "?" + query);
      if (list) {
        setCardData(list.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handlePrev = async () => {
    try {
      let list = await axios.get(prev);
      const query = prev.split("?")[1];
      navigate("/" + tab + "?" + query);
      if (list) {
        setCardData(list.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleCurrentPage = async (index) => {
    try {
      let query = "";
      const lang = searchParams.get("languages") || "";
      if (lang !== "") {
        query += "languages=" + lang;
      }
      let cat = searchParams.get("categories") || "";

      if (cat !== "") {
        if (query.length > 0) {
          query += "&categories=" + cat;
        } else {
          query += "categories=" + cat;
        }
      }
      let gen = searchParams.get("genre") || "";
      if (gen !== "") {
        if (query.length > 0) {
          query += "&genre=" + gen;
        } else {
          query += "genre=" + gen;
        }
      }
      const prices = searchParams.get("prices") || "";
      if (prices !== "") {
        if (query.length > 0) {
          query += "&prices=" + prices;
        } else {
          query += "prices=" + prices;
        }
      }
      let list;
      if (location.pathname === "/movies") {
        list = await axios.get(
          `/filterMovies/?${query}&page=${index + 1}&page_size=2`
        );
      } else if (location.pathname === "/events") {
        list = await axios.get(
          `/filterEvents/?${query}&page=${index + 1}&page_size=2`
        );
      } else if (location.pathname === "/sports") {
        list = await axios.get(
          `/filterSports/?${query}&page=${index + 1}&page_size=2`
        );
      } else if (location.pathname === "/activities") {
        list = await axios.get(
          `/filterActivities/?${query}&page=${index + 1}&page_size=2`
        );
      }

      if (list) {
        const page_size = parseInt(Math.ceil(list.data.count / 2));
        setItemCount(page_size);
        setCardData(list.data);

        navigate(`/${tab}?${query}&page=${index + 1}&page_size=2`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav
      aria-label="Page navigation example"
      style={{
        minHeight: "100%",
        height: "auto",
        backgroundColor: "#f0f0f0",
      }}
    >
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className={prev == null ? "page-link disableButton" : "page-link"}
            onClick={handlePrev}
          >
            Previous
          </a>
        </li>

        {[...Array(page_size)].map((item, index) => {
          return (
            <li className="page-item" key={"pagination-" + index}>
              <a
                className={index + 1 == page ? "active page-link" : "page-link"}
                onClick={() => handleCurrentPage(index)}
              >
                {index + 1}
              </a>
            </li>
          );
        })}

        <li className="page-item">
          <a
            className={next == null ? "page-link disableButton" : "page-link"}
            onClick={handleNext}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
