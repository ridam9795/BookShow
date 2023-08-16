import React, { useEffect, useState } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import FilterBox from "./FilterBox";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { SiteState } from "../Context/BookShowProvider";

function FilterAccordion(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { setCardData, setItemCount } = SiteState();
 const api_end_point =
   process.env.REACT_APP_MODE == "development"
     ? "http://localhost:8000"
     : process.env.REACT_APP_API_URL;
 http : axios.defaults.baseURL = api_end_point;
 const [searchParams, setSearchParams] = useSearchParams();
 const [langQuery, setLangQuery] = useState();
 const [catQuery, setCatQuery] = useState();
 const [genQuery, setGenQuery] = useState();
 const [priceQuery, setPriceQuery] = useState();

 useEffect(() => {
   updateCards();
 }, [langQuery, catQuery, genQuery, priceQuery]);
 const updateCards = () => {
   let languages = searchParams.get("languages") || "";
   let categories = searchParams.get("categories") || "";
   let genre = searchParams.get("genre") || "";
   let prices = searchParams.get("prices") || "";
   let page = searchParams.get("page") || "";
   let page_size = searchParams.get("page_size") || "";

   let query = "";
   if (languages) {
     if (query.length > 0) {
       query += "&languages=" + languages;
     } else {
       query += "languages=" + languages;
     }
   }

   if (categories) {
     if (query.length > 0) {
       query += "&categories=" + categories;
     } else {
       query += "categories=" + categories;
     }
   }

   if (genre) {
     if (query.length > 0) {
       query += "&genre=" + genre;
     } else {
       query += "genre=" + genre;
     }
   }

   if (prices) {
     if (query.length > 0) {
       query += "&prices=" + prices;
     } else {
       query += "prices=" + prices;
     }
   }
   if (page) {
     if (query.length > 0) {
       query += "&page=" + page;
     } else {
       query += "page=" + page;
     }
   }
   if (page_size) {
     if (query.length > 0) {
       query += "&page_size=" + page_size;
     } else {
       query += "page_size=" + page_size;
     }
   }
   if (location.pathname === "/movies") {
     navigate("/movies?" + query);
     filterCards("filterMovies", query);
   } else if (location.pathname === "/events") {
     navigate("/events?" + query);
     filterCards("filterEvents", query);
   } else if (location.pathname === "/sports") {
     navigate("/sports?" + query);
     filterCards("filterSports", query);
   } else if (location.pathname === "/activities") {
     navigate("/activities?" + query);
     filterCards("filterActivities", query);
   }
 };
 const filterCards = async (filterParam, query) => {
   try {
     if (query) {
       let fetchCards = await axios.get(`${filterParam}/?${query}`);
       if (fetchCards.data) {
         const page_size = parseInt(Math.ceil(fetchCards.data.count / 2));
         setItemCount(page_size);

         setCardData(fetchCards.data);
       }
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
                    langQuery={langQuery}
                    setLangQuery={setLangQuery}
                    catQuery={catQuery}
                    setCatQuery={setCatQuery}
                    genQuery={genQuery}
                    setGenQuery={setGenQuery}
                    priceQuery={priceQuery}
                    setPriceQuery={setPriceQuery}
                    category={category}
                    name={item}
                    key={i}
                    filterCards={filterCards}
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
