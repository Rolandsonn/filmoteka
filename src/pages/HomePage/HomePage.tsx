import React, { useEffect, useState, FC, useContext } from "react";
import { fetchFilms, searchFilms } from "../../api/fetchFilms";
import { Movie } from "../../types/type";
import MoviesList from "../../components/screens/MoviesList";
import { TodoContext } from "../../store/Context";
import Pagination from "../../components/screens/Pagination/Pagination";
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

  return (
    <div>
      <MoviesList movies={movies} />
      <Pagination page={page} />
    </div>
  );
};

export default HomePage;
