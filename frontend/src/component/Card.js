import React from "react";
import { useLocation } from "react-router-dom";
function Card({ cardItem }) {
  const location = useLocation();
  const api_end_point =
    process.env.REACT_APP_MODE == "development"
      ? "http://localhost:8000"
      : process.env.REACT_APP_API_URL;
  return (
    <div className="card" style={{ width: "14rem", heigth: "500px" }}>
      <img
        className="card-img-top"
        src={
          cardItem.image.substring(0, 4) == "http"
            ? cardItem.image
            : api_end_point + cardItem.image
        }
        alt={cardItem.title}
        height="300px"
      />
      <div className="card-body">
        <h6 className="card-title">{cardItem.title}</h6>
        <p className="card-title">{cardItem.desc.slice(0, 20) + "..."}</p>
        <p className="card-title">{cardItem.language}</p>
      </div>
    </div>
  );
}

export default Card;
