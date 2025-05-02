import { getAllMovies } from "../services/movieApi";
import { login } from "../services/login";
import { useState } from "react";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await login();
    const token = await res.text();
    const result = await getAllMovies(token);
    setMovies(await result.json());
  };

  return (
    <>
      <button onClick={() => getMovies()}>Get all Movies</button>
      <ul>
        {movies.map((movie, i) => {
          return <li key={i}>{movie.title}</li>;
        })}
      </ul>
    </>
  );
};
