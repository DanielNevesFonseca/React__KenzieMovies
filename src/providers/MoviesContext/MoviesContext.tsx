import { createContext } from "react";

interface IMoviesContextProps{
  children: React.ReactNode;
}

export const MoviesContext = createContext({});

export const MoviesProvider = ({children}: IMoviesContextProps) => {
  
  return(
    <MoviesContext.Provider value={{}}>
      {children}
    </MoviesContext.Provider>
  )
}