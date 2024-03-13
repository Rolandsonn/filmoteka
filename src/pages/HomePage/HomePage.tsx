import React, { useEffect, useState, FC, useContext } from "react";
import { fetchFilms, searchFilms } from "../../api/fetchFilms";
import { Movie } from "../../types/type";
import MoviesList from "../../components/screens/MoviesList";
import { TodoContext } from "../../store/Context";
import Pagination from "../../components/screens/Pagination/Pagination";
import axios from "axios";
const HomePage: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useContext(TodoContext);

  useEffect(() => {
    fetchFilms(page, setMovies);
  }, []);

  useEffect(() => {
    value && searchFilms(page, setMovies, value);
  }, [value]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/register")
      .then((response) => console.log(response));
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
      <Pagination page={page} />
    </div>
  );
};

export default HomePage;
