import { IMovie } from "../../../providers/MoviesContext/@types";
import { FiStar } from "react-icons/fi";
import styles from "./styles.module.scss";

interface IMoviesCardProps {
  movie: IMovie;
}

export const MoviesCard = ({ movie }: IMoviesCardProps) => {
  const averageReview = (movieObj: IMovie) => {
    const reviewsList = movieObj.reviews;
    if (reviewsList.length != 0) {
      const totalNote = reviewsList.reduce((prevValue, acumulator) => {
        return prevValue + acumulator.score;
      }, 0);
      const average = totalNote / reviewsList.length;
      return average.toFixed(1);
    } else {
      return "Be the first to rate!";
    }
  };

  return (
    <li className={styles.movieItem}>
      <img src={movie.image} alt={`${movie.name} image`} />
      <div className={styles.infoContainer}>
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
