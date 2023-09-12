import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { kenzieMovieApi } from "../../services/kenzieMovieApi";
import { IMovie, IMoviesContext, IMoviesProviderProps } from "./@types";

export const MoviesContext = createContext({} as IMoviesContext);

export const MoviesProvider = ({ children }: IMoviesProviderProps) => {
  const { data: moviesList } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await kenzieMovieApi.get<IMovie[]>(
        "/movies?_embed=reviews"
      );
      // console.log(data);
      return data;
    },
  });

  return (
    <MoviesContext.Provider value={{ moviesList }}>
      {children}
    </MoviesContext.Provider>
  );
};
