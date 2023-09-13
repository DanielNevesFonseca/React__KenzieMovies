import { UseMutationResult } from "react-query";

export interface IUserContext {
  postUserLogin: UseMutationResult<
    IResponseSuccess,
    IErrorObject,
    ILoginFormData,
    unknown
  >;
  postUserRegister: UseMutationResult<
    IResponseSuccess,
    IErrorObject,
    IRegisterFormData,
    unknown
  >;
}
export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface ILoginFormData {
  email: string;
  password: string;
}
export interface IRegisterFormData {
  email: string;
  password: string;
}

export interface IResponseSuccess {
  accessToken(arg0: string, accessToken: any): unknown;
  data: ILoginData;
  status: number;
  statusText: string;
  headers: ILoginHeaders;
  config: ILoginConfig;
  request: ILoginRequest;
}

export interface ILoginData {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  id: number;
}

export interface ILoginHeaders {
  "content-type": string;
}

export interface ILoginConfig {
  transitional: ILoginTransitional;
  adapter: string;
  transformRequest: any[];
  transformResponse: any[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: ILoginHeaders2;
  baseURL: string;
  method: string;
  url: string;
  data: string;
}

export interface ILoginTransitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface ILoginHeaders2 {
  Accept: string;
  "Content-Type": string;
}

export interface ILoginRequest {}

// ============================================= ERROR INTERFACES BELOW ========================================================
export interface IErrorObject {
  message: string;
  name: string;
  stack: string;
  config: IErrorConfig;
  code: string;
  status: number;
  request: IErrorRequest;
  response: IErrorResponse;
}

export interface IErrorConfig {
  transitional: IErrorTransitional;
  adapter: string;
  transformRequest: any[];
  transformResponse: any[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: IErrorHeaders;
  baseURL: string;
  method: string;
  url: string;
  data: string;
}

export interface IErrorTransitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Env {}

export interface IErrorHeaders {
  Accept: string;
  "Content-Type": string;
}

export interface IErrorRequest {}

export interface IErrorResponse {
  data: string;
  status: number;
  statusText: string;
  headers: IErrorHeaders2;
  config: Config2;
  request: Request2;
}

export interface IErrorHeaders2 {
  "content-type": string;
}

export interface Config2 {
  transitional: Transitional2;
  adapter: string;
  transformRequest: any[];
  transformResponse: any[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env2;
  headers: Headers3;
  baseURL: string;
  method: string;
  url: string;
  data: string;
}

export interface Transitional2 {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Env2 {}

export interface Headers3 {
  Accept: string;
  "Content-Type": string;
}

export interface Request2 {}
