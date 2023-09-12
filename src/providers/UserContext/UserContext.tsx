import { createContext } from "react";
import {
  IErrorObject,
  IFormData,
  ILoginResponseSuccess,
  IUserContext,
  IUserProviderProps,
} from "./@types";
import { useMutation } from "@tanstack/react-query";
import { kenzieMovieApi } from "../../services/kenzieMovieApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const postUserLogin = useMutation({
    mutationFn: async (formData: IFormData) => {
      const response = await kenzieMovieApi.post<ILoginResponseSuccess>(
        "/login",
        formData
      );
      localStorage.setItem(
        "@Kenzie-Movie:user-token",
        JSON.stringify(response.data.accessToken)
      );
        navigate("/")
        toast.success("Logged successfully!");
      return response.data;
    },
    onError: (error: IErrorObject) => {
      toast.error(error.response.data);
    },
  });

  return (
    <UserContext.Provider value={{ postUserLogin }}>
      {children}
    </UserContext.Provider>
  );
};
