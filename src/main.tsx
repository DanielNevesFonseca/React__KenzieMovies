import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import 'react-toastify/dist/ReactToastify.min.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools/>
        <ToastContainer theme="colored" autoClose={2 * 1000}/>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
