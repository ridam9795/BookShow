import React, { useContext, useState, createContext } from "react";

const SiteContext = createContext();
function BookShowProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);
  const [sports, setSports] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
  const [CardData, setCardData] = useState({});
  const [itemCount, setItemCount] = useState();

  return (
    <SiteContext.Provider
      value={{
        movies,
        setMovies,
        events,
        setEvents,
        sports,
        setSports,
        activities,
        setActivities,
        loggedInUser,
        setLoggedInUser,
        CardData,
        setCardData,
        itemCount,
        setItemCount,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
export const SiteState = () => {
  return useContext(SiteContext);
};

export default BookShowProvider;
