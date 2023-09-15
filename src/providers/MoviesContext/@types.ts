import { UseMutationResult } from "@tanstack/react-query";

export interface IMoviesProviderProps {
  children: React.ReactNode;
}

export interface IMoviesContext {
  moviesList: IMovie[] | undefined;
  readMoviesById: UseMutationResult<any, unknown, number, unknown>;
  movieData: IMovie | null;
  averageReview: (movieObj: IMovie | null) => string;
}

export interface IReview {
  id: number;
  movieId: number;
  userId: number;
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
