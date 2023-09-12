import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MoviesContext";
import { MoviesCard } from "./MoviesCard/MoviesCard";
import styles from "./styles.module.scss";

export const MoviesList = () => {
  const { moviesList } = useContext(MoviesContext);

  return (
    <ul className={`${styles.moviesList}`}>
      {moviesList?.map((_movie) => (
        <MoviesCard key={_movie.id} movie={_movie} />
      ))}
    </ul>
  );
};
