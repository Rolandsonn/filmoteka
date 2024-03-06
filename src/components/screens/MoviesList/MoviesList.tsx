import React, { FC } from "react";
import { Movie } from "../../../types/type";
import MoviesItem from "../MoviesItem";
import styles from "./MoviesList.module.css";

interface MovieProps {
  movies: Movie[];
}

const MoviesList: FC<MovieProps> = ({ movies }) => {
  const moviesElem = movies.map((movie: Movie) => (
    <MoviesItem key={movie.id} movie={movie} />
  ));

  return <ul className={styles.list}>{moviesElem}</ul>;
};

export default MoviesList;
