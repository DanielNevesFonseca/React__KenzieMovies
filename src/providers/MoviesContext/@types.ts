export interface IMoviesProviderProps {
  children: React.ReactNode;
}

export interface IMoviesContext {
  moviesList: IMovie[] | undefined;
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
