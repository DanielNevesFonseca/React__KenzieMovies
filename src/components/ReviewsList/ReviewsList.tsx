import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { MoviesContext } from "../../providers/MoviesContext/MoviesContext";
import styles from "./styles.module.scss";
import { FiStar } from "react-icons/fi";

interface IReviewListProps {
  findUserReview: any;
}

export const ReviewsList = ({ findUserReview }: IReviewListProps) => {
  const { allUsersData } = useContext(UserContext);
  const { movieData } = useContext(MoviesContext);

  return (
    <ul className={`${styles.reviewListContainer}`}>
      {movieData?.reviews.map((_review) => (
        <li className={`${styles.reviewItem}`} key={_review.id}>
          <div className={`${styles.roundedFirstLetter}`}>
            <p className={`text`}>
              {findUserReview(_review.userId, allUsersData)?.name.slice(0, 1)}
            </p>
          </div>
          <div className={`${styles.ratingBox}`}>
            <FiStar size={24} />
            <span className="text">{_review.score.toFixed(1)}/10</span>
          </div>
          <p className={`${styles.reviewDescription} text`}>
            "{_review.description}"
          </p>
          <h3 className={`${styles.user} title3`}>
            {findUserReview(_review.userId, allUsersData)?.name}
          </h3>
        </li>
      ))}
    </ul>
  );
};
