import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Movie from "./component/Movie";
import Sports from "./component/Sports";
import MovieDetail from "./component/MovieDetail";
import Events from "./component/Events";
import Activities from "./component/Activities";
import Search from "./component/Search";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Movie />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="/events" exact element={<Events />} />

        <Route path="/sports" exact element={<Sports />} />
        <Route path="/activities" exact element={<Activities />} />
        <Route path="/search" exact element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
