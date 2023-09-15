import { IMovie } from "../../../providers/MoviesContext/@types";
import { FiStar } from "react-icons/fi";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext/MoviesContext";

interface IMoviesCardProps {
  movie: IMovie;
}

export const MoviesCard = ({ movie }: IMoviesCardProps) => {
  const { readMoviesById, averageReview } = useContext(MoviesContext);

  return (
    <li className={styles.movieItem}>
      <img
        onClick={() => readMoviesById.mutate(movie.id)}
        src={movie.image}
        alt={`${movie.name} image`}
      />
      <div className={`${styles.infoContainer}`}>
        <div className={styles.textBox}>
          <span className="tag">{movie.type}</span>
          <h3 className="title3">{movie.name}</h3>
        </div>
        <div className={styles.rateBox}>
          <p className="text">{movie.duration}m</p>
          <div className={styles.ratingBox}>
            <FiStar size={24} />
            <span className="text">
              {averageReview(movie) === "Be the first to rate!"
                ? averageReview(movie)
                : String(averageReview(movie) + "/10")}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
