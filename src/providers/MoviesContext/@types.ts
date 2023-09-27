import { UseMutationResult } from "@tanstack/react-query";

export interface IMoviesProviderProps {
  children: React.ReactNode;
}

export interface IMoviesContext {
  moviesList: IMovie[] | undefined;
  readMoviesById: UseMutationResult<
    any,
    unknown,
    number | null | undefined,
    unknown
  >;
  movieData: IMovie | null;
  averageReview: (movieObj: IMovie | null) => string;
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createReview: UseMutationResult<any, unknown, INewReview, unknown>;
  isDeleteModalOpen: number | null | undefined;
  setIsDeleteModalOpen: React.Dispatch<
    React.SetStateAction<number | null | undefined>
  >;
  deleteReview: UseMutationResult<any, unknown, void, unknown>;
  setMovieData: React.Dispatch<React.SetStateAction<IMovie | null>>;
  myReviewData: IReview | null | undefined;
  setMyReviewData: React.Dispatch<
    React.SetStateAction<IReview | null | undefined>
  >;
  isEditModalOpen: INewReview | null | undefined;
  setIsEditModalOpen: React.Dispatch<
    React.SetStateAction<INewReview | null | undefined>
  >;
  editReview: UseMutationResult<any, unknown, INewReview, unknown>;
  hasUserRating: () => boolean | undefined;
  findUserReview: (reviewUserId: number, list: any) => any;
  myReview: () => IReview | undefined | null;
  isMoviesListLoading: boolean;
}
export interface IUserReview {
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export interface IReview {
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export interface INewReview {
  userId: number;
  movieId: number | undefined;
  score: number;
  description: string;
}

export interface IMovie {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
  reviews: IReview[];
}
