import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { kenzieMovieApi } from "../../services/kenzieMovieApi";
import {
  IMovie,
  IMoviesContext,
  IMoviesProviderProps,
  INewReview,
  IReview,
} from "./@types";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const MoviesContext = createContext({} as IMoviesContext);

export const MoviesProvider = ({ children }: IMoviesProviderProps) => {
  const movieDataObject: string | null = localStorage.getItem(
    "@Kenzie-Movie:currentPost"
  );

  const myReviewObject = localStorage.getItem("@Kenzie-Movie:userReviewId");

  const [movieData, setMovieData] = useState<IMovie | null>(
    movieDataObject ? JSON.parse(movieDataObject) : null
  );

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<
    number | null | undefined
  >(null);
  const [myReviewData, setMyReviewData] = useState<IReview | null>(
    myReviewObject ? JSON.parse(myReviewObject) : null
  );

  const navigate = useNavigate();

  const { data: moviesList } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await kenzieMovieApi.get<IMovie[]>(
        "/movies?_embed=reviews"
      );
      return data;
    },
  });

  const readMoviesById = useMutation({
    mutationKey: ["movieDataObject"],
    mutationFn: async (movieId: number | null | undefined) => {
      const response = await kenzieMovieApi.get(
        `/movies/${movieId}?_embed=reviews`
      );
      return response.data;
    },
    onSuccess: (data, movieId) => {
      setMovieData(data);
      localStorage.setItem("@Kenzie-Movie:currentPost", JSON.stringify(data));
      navigate(`/movie/${movieId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const createReview = useMutation({
    mutationFn: async (formData: INewReview) => {
      const token: string | null = localStorage.getItem(
        "@Kenzie-Movie:user-token"
      );
      if (token) {
        const response = await kenzieMovieApi.post("/reviews", formData, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        return response.data;
      }
    },
    onSuccess: (data) => {
      toast.success("Review created successfully!");
      readMoviesById.mutate(data.movieId);

      console.log(movieData);
    },
  });

  const deleteReview = useMutation({
    mutationFn: async () => {
      const token: string | null = localStorage.getItem(
        "@Kenzie-Movie:user-token"
      );
      
      if (token) {
        const response = await kenzieMovieApi.delete(
          `/reviews/${myReviewData?.id}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        return response;
      }
    },
    onSuccess: () => {
      toast.success("Your comment has been removed!");
      readMoviesById.mutate(movieData?.id);
    },
  });

  const averageReview = (movieObj: IMovie | null) => {
    const reviewsList = movieObj?.reviews;

    if (reviewsList?.length != 0 && reviewsList !== undefined) {
      const totalNote = reviewsList?.reduce((prevValue, acumulator) => {
        return prevValue + acumulator.score;
      }, 0);
      const average = totalNote / reviewsList?.length;
      return average.toFixed(1);
    } else {
      return "Be the first to rate!";
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        readMoviesById,
        movieData,
        createReview,
        deleteReview,
        averageReview,
        isCreateModalOpen,
        setIsCreateModalOpen,
        setIsDeleteModalOpen,
        isDeleteModalOpen,
        setMovieData,
        myReviewData,
        setMyReviewData
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
