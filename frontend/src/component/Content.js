import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
function Content({ tab }) {
  // axios.defaults.baseURL = "http://localhost:8000";
  useEffect(() => {
    fetchList();
  }, [tab]);
  const [CardList, setCardList] = useState([]);
  const fetchList = async () => {
    try {
      let list = await axios.get(`/${tab}/`);
      if (list) {
        console.log(list.data);
        setCardList(list.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row my-4">
      {CardList?.map((cardItem) => {
        return (
          <div
            className="col-md-4 col-sm-4 justify-content-center my-3"
            key={cardItem.id}
          >
            <Card cardItem={cardItem} />
          </div>
        );
      })}
    </div>
  );
}

export default Content;
