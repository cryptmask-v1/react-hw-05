import { useState, useEffect } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import axios from "axios";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(""); // Hata mesajı için state
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setSearchQuery(query);
    if (query) {
      fetchMovies(query);
    } else {
      setMovies([]);
      setError(""); // Hata mesajını sıfırla
    }
  }, [searchParams]);

  const fetchMovies = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "5405d967c65ac9d600b3e86227609c1b",
            query: query,
          },
        }
      );
      setMovies(response.data.results);
      if (response.data.results.length === 0) {
        setError("No movies found."); // Sonuç yoksa hata mesajı ayarla
      } else {
        setError(""); // Sonuç varsa hata mesajını temizle
      }
    } catch (error) {
      console.error("Error fetching movies: ", error);
      setError("An error occurred while fetching movies."); // API hatası olursa mesaj göster
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Hata mesajı */}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location.pathname + location.search }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
