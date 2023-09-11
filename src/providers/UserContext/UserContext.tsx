import { createContext } from "react";

interface IUserContextProps{
  children: React.ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({children}: IUserContextProps) => {
  
  return(
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
}