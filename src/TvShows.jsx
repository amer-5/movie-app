import { useState, useEffect, useCallback } from "react";
import styles from "./Home.module.css";
import debounce from "lodash.debounce";

const API_KEY = "bde4e7faf15db2134c782f7b04b91fee";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchPopularTVShows();
  }, []);

  const fetchPopularTVShows = () => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setPopularTVShows(data.results))
      .catch((error) =>
        console.error("Error fetching popular TV shows:", error)
      );
  };

  const fetchSearchResults = useCallback(
    debounce((query) => {
      if (query) {
        fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
        )
          .then((response) => response.json())
          .then((data) => setSearchResults(data.results))
          .catch((error) =>
            console.error("Error fetching search results:", error)
          );
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    fetchSearchResults(query);
  }, [query, fetchSearchResults]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const getDisplayedResults = () => {
    return searchResults.length > 0 ? searchResults : popularTVShows;
  };

  return (
    <>
      <div className={styles.movies}>
        <div className={styles.homeText}>
          <h1>Amer{"'"}s Movie App</h1>
          <p>
            Discover the best movies, TV shows, and more from around the world.
          </p>
        </div>
        <input
          type="text"
          id="searchInput"
          placeholder="Search for movies or TV shows"
          onChange={handleSearchChange}
          value={query}
          style={{ marginBottom: "64px" }}
        />
        <div>
          <div className={styles.wrapper}>
            {getDisplayedResults().map((result) => (
              <div key={result.id} className={styles.card}>
                <img
                  src={
                    result.poster_path
                      ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  alt={result.title || result.name}
                  className={styles.poster}
                />
                <div className={styles.cardContent}>
                  <div className={styles.rating}>
                    <span>
                      ⭐{" "}
                      {result.vote_average
                        ? result.vote_average.toFixed(1)
                        : "N/A"}
                    </span>
                  </div>
                  <h3>{result.title || result.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
