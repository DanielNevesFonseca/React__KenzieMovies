import { createContext } from "react";
import {
  IErrorObject,
  ILoginFormData,
  IRegisterFormData,
  IResponseSuccess,
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
    mutationFn: async (formData: ILoginFormData) => {
      const response = await kenzieMovieApi.post<IResponseSuccess>(
        "/login",
        formData
      );
      localStorage.setItem(
        "@Kenzie-Movie:user-token",
        JSON.stringify(response.data.accessToken)
      );
      navigate("/");
      toast.success("Logged successfully!");
      return response.data;
    },
    onError: (error: IErrorObject) => {
      toast.error(error.response.data);
    },
  });

  const postUserRegister = useMutation({
    mutationFn: async (formData: IRegisterFormData) => {
      const response = await kenzieMovieApi.post<IResponseSuccess>(
        "/users",
        formData
      );
      toast.success("Registered successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2 * 1000)
      return response.data;
    },
    onError: (error: IErrorObject) => {
      toast.error(error.response.data);
    },
  });

  return (
    <UserContext.Provider value={{ postUserLogin, postUserRegister }}>
      {children}
    </UserContext.Provider>
  );
};
