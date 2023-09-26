import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../../forms/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditReviewModalSchema,
  IEditReviewModalValues,
} from "./EditReviewModalSchema";
import { MoviesContext } from "../../../providers/MoviesContext/MoviesContext";
import { useContext } from "react";
import { INewReview } from "../../../providers/MoviesContext/@types";

export const EditReviewModal = () => {
  const { isEditModalOpen, setIsEditModalOpen, editReview, movieData } =
    useContext(MoviesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEditReviewModalValues>({
    resolver: zodResolver(EditReviewModalSchema),
  });

  const submit: SubmitHandler<IEditReviewModalValues> = (formData) => {
    const userId = localStorage.getItem("@Kenzie-Movie:userId");
    const newFormData: INewReview = {
      ...formData,
      userId: Number(userId),
      movieId: movieData?.id,
    };
    editReview.mutate(newFormData);
    setIsEditModalOpen(null);
    reset();
  };

  return (
    <div className={`${styles.modalController}`} role="dialog">
      <div className={`${styles.modalContainer}`}>
        <h1 className="title1">Edit Review</h1>
        <button onClick={() => setIsEditModalOpen(null)} type="button">
          <AiOutlineClose size={21} />
        </button>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            autoComplete="off"
            step={0.1}
            placeholder="Type a rating note: 0 to 10"
            type="number"
            {...register("score", {
              max: 10,
              min: 0,
              valueAsNumber: true,
              value: isEditModalOpen?.score
            })}
            
            error={errors?.score}
          />
          <div className={`${styles.textareaBox}`}>
            <textarea
              autoComplete="off"
              {...register("description", {
                value: isEditModalOpen?.description
              })}
              className={`input`}
              placeholder="Leave a comment"
            ></textarea>
            <span>{errors?.description?.message}</span>
          </div>
          <button className={`${styles} btn-md`}>Edit Review</button>
        </form>
      </div>
    </div>
  );
};
