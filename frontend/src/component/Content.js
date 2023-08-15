import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { SiteState } from "../Context/BookShowProvider";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

function Content({ tab }) {
  // axios.defaults.baseURL = "http://localhost:8000";
  const { movies, CardData, setCardData, itemCount, setItemCount } =
    SiteState();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const currPage =
        searchParams.get("page") == null ? 1 : searchParams.get("page");
      const page_size = searchParams.get("page_size");
      const languages = searchParams.get("languages");
      const categories = searchParams.get("categories");
      const price = searchParams.get("prices");
      if (
        page_size == null &&
        languages == null &&
        categories == null &&
        price == null
      ) {
        let list = await axios.get(`/${tab}/?page=${currPage}&page_size=2`);
        console.log("List>>> ", list);
        if (list) {
          const page_size = parseInt(
            Math.ceil(list.data.count / list.data.results.length)
          );
          setItemCount(page_size);
          setCardData(list.data);
        }
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
