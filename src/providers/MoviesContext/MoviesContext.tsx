import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { kenzieMovieApi } from "../../services/kenzieMovieApi";

interface IMoviesProviderProps{
  children: React.ReactNode;
}

interface IMoviesContext{
  moviesList: IMovie[] | undefined;
  
}

interface IReview{
  id: number,
  movieId: number,
  userId: number,
  score: number,
  description: string,
}

interface IMovie{
  id: number,
  name: string,
  type: string,
  duration: number,
  synopsis: string,
  image: string,
  reviews: IReview[]
}

export const MoviesContext = createContext({} as IMoviesContext);

export const MoviesProvider = ({children}: IMoviesProviderProps) => {
  
  const {data: moviesList} = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const {data} = await kenzieMovieApi.get<IMovie[]>("/movies?_embed=reviews");
      console.log(data);
      return data;
    }
  })

  return(
    <MoviesContext.Provider value={{moviesList}}>
      {children}
    </MoviesContext.Provider>
  )
}