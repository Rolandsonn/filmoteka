import React, { FC } from "react";
import { Movie } from "../../../types/type";
import noImage from "../../../assets/images/noImage.png";
import styles from "./MoviesItem.module.css";
import { Link } from "react-router-dom";
interface MoviesItemProps {
  movie: Movie;
  key: number;
}

const MoviesItem: FC<MoviesItemProps> = ({ movie }) => {
  const { poster_path, backdrop_path, title, id } = movie;

  return (
    <Link to={`${id}`} className={styles.item}>
      <li>
        <img
          src={
            poster_path || backdrop_path
              ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
              : noImage
          }
          alt={title}
        />
      </li>
    </Link>
  );
};

export default MoviesItem;
