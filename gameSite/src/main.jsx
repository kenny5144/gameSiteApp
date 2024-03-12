import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Login/SignUp.jsx";
import Signin from "./Login/Signin.jsx";
import { ChakraProvider } from '@chakra-ui/react'

import {
  
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient= new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
  </QueryClientProvider>
      </React.StrictMode>
);
