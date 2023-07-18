import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { SiteState } from "../Context/BookShowProvider";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

function Content({ tab }) {
  // axios.defaults.baseURL = "http://localhost:8000";
  const {
    movies,
    events,
    sports,
    activities,
    CardData,
    setCardData,
    itemCount,
    setItemCount,
  } = SiteState();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("Card data ", CardData);
  useEffect(() => {
    console.log("Content changed data >>>>>>>>>>>>>>>>>>>>>>", CardData);
    fetchList();
  }, [tab]);

  // useEffect(() => {
  //   setCardData(movies);
  // }, [movies]);
  useEffect(() => {
    setCardData(events);
  }, [events]);
  useEffect(() => {
    setCardData(sports);
  }, [sports]);
  useEffect(() => {
    setCardData(activities);
  }, [activities]);

  const fetchList = async () => {
    try {
      console.log("tab", tab, "param: >>>>>>>>>>", searchParams.get("page"));
      const currPage =
        searchParams.get("page") == null ? 1 : searchParams.get("page");

      let list = await axios.get(`/${tab}/?page=${currPage}&page_size=2`);
      if (list) {
        console.log("content data: ", list.data);
        const page_size = parseInt(
          Math.ceil(list.data.count / list.data.results.length)
        );
        setItemCount(page_size);
        setCardData(list.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row my-4">
        {CardData.results?.map((cardItem) => {
          return (
            <div
              className="col-md-4 col-sm-4 justify-content-center my-3"
              key={cardItem.title + "-" + cardItem.id}
            >
              <Card cardItem={cardItem} />
            </div>
          );
        })}
      </div>
      {itemCount > 0 ? (
        <Pagination
          page_size={itemCount}
          page={searchParams.get("page") == null ? 1 : searchParams.get("page")}
          prev={CardData.previous != null ? CardData.previous : null}
          next={CardData.next != null ? CardData.next : null}
          tab={tab}
        />
      ) : (
        <h1>NO ITEM MATCHES THE FILTERED CRITERIA</h1>
      )}
    </>
  );
}

export default Content;
