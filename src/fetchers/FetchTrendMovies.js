import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day";
const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDA1ZDk2N2M2NWFjOWQ2MDBiM2U4NjIyNzYwOWMxYiIsIm5iZiI6MTc0MDA5NzQzMC44MDE5OTk4LCJzdWIiOiI2N2I3Yzc5NmJjODRkNTZjYmViYTM1ZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SPfSxHYA3ffBU5W3r1RDptmLkXZhe7n0VI6iPzTBOdc`,
  },
};

const fetchTrendMovies = async () => {
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Hata:", error);
  }
};

export default fetchTrendMovies;
