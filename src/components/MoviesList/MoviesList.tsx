import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MoviesContext";
import { FiStar } from "react-icons/fi";
import { IMovie } from "../../providers/MoviesContext/@types";

export const MoviesList = () => {
  const { moviesList } = useContext(MoviesContext);

  const averageReview = (movieObj: IMovie) => {
    const reviewsList = movieObj.reviews;
    if (reviewsList.length != 0) {
      const totalNote = reviewsList.reduce((prevValue, acumulator) => {
        return prevValue + acumulator.score;
      }, 0);
      const average = Number((totalNote / reviewsList.length).toFixed(1));
      return average;
    } else {
      return "Be the first to rate!"
    }
  };

  return (
    <ul>
      {moviesList?.map((_movie) => (
        <li key={_movie.id}>
          <img src={_movie.image} alt={`${_movie.name} image`} />
          <div>
            <span className="tag">{_movie.type}</span>
            <h3>{_movie.name}</h3>
          </div>
          <div>
            <p>{_movie.duration}m</p>
            <div>
              <FiStar size={21} />
              <span>{averageReview(_movie)}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
