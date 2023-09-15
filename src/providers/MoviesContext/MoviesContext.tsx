import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { kenzieMovieApi } from "../../services/kenzieMovieApi";
import { IMovie, IMoviesContext, IMoviesProviderProps } from "./@types";
import { useNavigate } from "react-router";

export const MoviesContext = createContext({} as IMoviesContext);

export const MoviesProvider = ({ children }: IMoviesProviderProps) => {
  const movieDataObject: string | null = localStorage.getItem(
    "@Kenzie-Movie:currentPost"
  );

  const [movieData, setMovieData] = useState<IMovie | null>(
    movieDataObject ? JSON.parse(movieDataObject) : null
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
    mutationFn: async (movieId: number) => {
      const response = await kenzieMovieApi.get(
        `/movies/${movieId}?_embed=reviews`
      );
      return response.data;
    },
    onSuccess: (data) => {
      setMovieData(data);
      console.log(data);

      localStorage.setItem("@Kenzie-Movie:currentPost", JSON.stringify(data));
      navigate(`/movie`);
    },
    onError: (error) => {
      console.log(error);
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
    <MoviesContext.Provider value={{ moviesList, readMoviesById, movieData, averageReview }}>
      {children}
    </MoviesContext.Provider>
  );
};
