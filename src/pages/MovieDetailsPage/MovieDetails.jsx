import { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Önceki sayfa bilgisi
  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDA1ZDk2N2M2NWFjOWQ2MDBiM2U4NjIyNzYwOWMxYiIsIm5iZiI6MTc0MDA5NzQzMC44MDE5OTk4LCJzdWIiOiI2N2I3Yzc5NmJjODRkNTZjYmViYTM1ZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SPfSxHYA3ffBU5W3r1RDptmLkXZhe7n0VI6iPzTBOdc`,
        },
      })
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Hata:", error));
  }, [id]);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDA1ZDk2N2M2NWFjOWQ2MDBiM2U4NjIyNzYwOWMxYiIsIm5iZiI6MTc0MDA5NzQzMC44MDE5OTk4LCJzdWIiOiI2N2I3Yzc5NmJjODRkNTZjYmViYTM1ZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SPfSxHYA3ffBU5W3r1RDptmLkXZhe7n0VI6iPzTBOdc`,
        },
      })
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.error("Hata:", error));

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/reviews`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDA1ZDk2N2M2NWFjOWQ2MDBiM2U4NjIyNzYwOWMxYiIsIm5iZiI6MTc0MDA5NzQzMC44MDE5OTk4LCJzdWIiOiI2N2I3Yzc5NmJjODRkNTZjYmViYTM1ZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SPfSxHYA3ffBU5W3r1RDptmLkXZhe7n0VI6iPzTBOdc`,
        },
      })
      .then((response) => setReviews(response.data.results))
      .catch((error) => console.error("Hata:", error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(backLink)}>⬅ Go Back</button>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
      />
      <p>
        <strong>⭐ Rating:</strong> {movie.vote_average}
      </p>
      <p>
        <strong>📅 Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>📖 Overview:</strong> {movie.overview}
      </p>
      <div>
        <Link to={`/movies/${id}/cast`} state={{ from: backLink }}>
          <h3>Cast</h3>
        </Link>
        <Link to={`/movies/${id}/reviews`} state={{ from: backLink }}>
          <h3>Reviews</h3>
        </Link>
      </div>
      {location.pathname.includes("cast") && (
        <ul>
          {cast.length === 0 ? (
            <p>No cast information available.</p>
          ) : (
            cast.map((actor) => (
              <li key={actor.id}>
                <strong>{actor.name}</strong> as {actor.character}
              </li>
            ))
          )}
        </ul>
      )}
      {location.pathname.includes("reviews") && (
        <div>
          {reviews.length === 0 ? (
            <p>No reviews available.</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id}>
                <p>
                  <strong>{review.author}:</strong> {review.content}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
