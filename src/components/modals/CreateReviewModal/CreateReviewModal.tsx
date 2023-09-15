import { Input } from "../../forms/Input/Input";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext/MoviesContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateModalSchema, ICreateModalValues } from "./CreateReviewSchema";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const CreateReviewModal = () => {
  const { setIsCreateModalOpen, movieData, createReview } =
    useContext(MoviesContext);
  const { userData } = useContext(UserContext);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateModalValues>({
    resolver: zodResolver(CreateModalSchema),
  });


  const submit: SubmitHandler<ICreateModalValues> = (formData) => {
    const newFormData = {
      ...formData,
      movieId: movieData?.id,
      userId: userData.id,
    };
    console.log(newFormData);
    createReview.mutate(newFormData);
    setIsCreateModalOpen(false);
    reset();
  };

  return (
    <div className={`${styles.modalController}`} role="dialog">
      <div className={`${styles.modalContainer}`}>
        <h1 className="title1">Review</h1>
        <button
          onClick={() => {
            setIsCreateModalOpen(false);
          }}
        >
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
            })}
            error={errors?.score}
          />
          <div className={`${styles.textareaBox}`}>
            <textarea
              autoComplete="off"
              {...register("description")}
              className={`input`}
              placeholder="Leave a comment"
            ></textarea>
            <span>{errors?.description?.message}</span>
          </div>
          <button className={`${styles} btn-md`}>Make Review</button>
        </form>
      </div>
    </div>
  );
};
