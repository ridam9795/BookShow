import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SiteState } from "../Context/BookShowProvider";

function Pagination({ page_size, page, prev, next, tab }) {
  //console.log(CardData.results.length);
  const navigate = useNavigate();
  const { setCardData } = SiteState();

  const handleNext = async () => {
    try {
      let list = await axios.get(next);
      console.log("pagination list: ", list);
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
      console.log("pagination list: ", list);
      const query = prev.split("?")[1];
      navigate("/" + tab + "?" + query);
      if (list) {
        setCardData(list.data);
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
                href="#"
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
