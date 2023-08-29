import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ShowDetail() {
  const { showID } = useParams();
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState("");
  const api_end_point =
    process.env.REACT_APP_MODE == "development"
      ? "http://localhost:8000"
      : process.env.REACT_APP_API_URL;
  axios.defaults.baseURL = api_end_point;
  const location = useLocation();
  useEffect(() => {
    verifyShowId();
  }, [showID]);
  const verifyShowId = async () => {
    try {
      let showData = await axios.post(`/verifyShowDetail/${showID}`, {
        show: location.pathname.split("/")[1],
      });

      if (showData.data.message == "valid data") {
        setIsValid(true);
        setDescription(showData.data.description);
      } else {
        setIsValid(false);
        setDescription("");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log("Error: ", err);
    }
  };
  return (
    <>
      {isValid ? (
        <>
          {" "}
          <div className="video-responsive">
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${showID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="container">
            <h2>About</h2>
            <p>{description}</p>
          </div>
        </>
      ) : loading ? (
        <div className=" d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div>
          <img src="https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg" />
        </div>
      )}
    </>
  );
}

export default ShowDetail;
