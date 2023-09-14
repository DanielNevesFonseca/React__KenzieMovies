import { createContext } from "react";
import {
  IErrorObject,
  ILoginFormData,
  IRegisterFormData,
  IResponseSuccess,
  IUserContext,
  IUserProviderProps,
} from "./@types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { kenzieMovieApi } from "../../services/kenzieMovieApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const postUserLogin = useMutation({
    mutationFn: async (formData: ILoginFormData) => {
      const response = await kenzieMovieApi.post<IResponseSuccess>(
        "/login",
        formData
      );
      navigate("/");
      toast.success("Logged successfully!");
      return response.data;
    },
    onSuccess(data) {
      queryClient.invalidateQueries(["userData"]);
      localStorage.setItem(
        "@Kenzie-Movie:user-token",
        JSON.stringify(data.accessToken)
      );
      localStorage.setItem(
        "@Kenzie-Movie:userId",
        JSON.stringify(data.user.id)
      );
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
      return response.data;
    },
    onSuccess: () => {
      toast.success("Registered successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2 * 1000);
    },
    onError: (error: IErrorObject) => {
      toast.error(error.response.data);
    },
  });

  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const userId = localStorage.getItem("@Kenzie-Movie:userId");
      const { data } = await kenzieMovieApi.get(`/users/${userId}`);
      return data;
    },
    onError: () => {
      return {};
    },
  });

  const logout = () => {
    toast.warn("Redirecting to home...");
    localStorage.removeItem("@Kenzie-Movie:user-token");
    localStorage.removeItem("@Kenzie-Movie:userId");
    queryClient.resetQueries(["userData"]);
    setTimeout(() => {
      navigate("/");
    }, 1.5 * 1000);
  };

  return (
    <UserContext.Provider
      value={{ postUserLogin, postUserRegister, userData, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
