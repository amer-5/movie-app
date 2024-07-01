import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Suggest from "./Suggest";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/suggest" element={<Suggest />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
