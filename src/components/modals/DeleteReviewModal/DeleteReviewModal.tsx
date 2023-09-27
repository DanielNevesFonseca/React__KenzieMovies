import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext/MoviesContext";

export const DeleteReviewModal = () => {
  const { setIsDeleteModalOpen, deleteReview } = useContext(MoviesContext);

  return (
    <div className={`${styles.modalController}`} role="dialog">
      <div className={`${styles.modalContainer}`}>
        <h3 className="title3">
          Are you sure you want to <span>delete</span> your comment?
        </h3>
        <button
          onClick={() => {
            setIsDeleteModalOpen(null);
          }}
        >
          <AiOutlineClose size={21} />
        </button>
        <div>
          <button
            onClick={() => {
              deleteReview.mutate();
              setIsDeleteModalOpen(null);
            }}
            className={`btn-md delete`}
          >
            Delete
          </button>
          <button
            className={`btn-md cancel`}
            onClick={() => {
              setIsDeleteModalOpen(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
