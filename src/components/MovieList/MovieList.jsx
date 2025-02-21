import { useState, useEffect } from "react";
import fetchTrendMovies from "../../fetchers/FetchTrendMovies.js";
import { Link } from "react-router";
import TrendingMoviesTitle from "./TrendingMoviesTitle.jsx";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadTrendMovies = async () => {
      const trendMovies = await fetchTrendMovies();
      setMovies(trendMovies);
    };
    loadTrendMovies();
  }, []);
  console.log(movies);
  return (
    <div style={{ marginLeft: "10px" }}>
      <TrendingMoviesTitle />
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        {movies.length === 0 ? (
          <p>Hiç film bulunamadı</p>
        ) : (
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: "/" }}>
                {movie.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MoviesList;
