import React from 'react';
import { Signup } from "./pages/signup";
import { Header } from './components/header'
import { RouterProvider } from 'react-router-dom';
import { route } from './routes';


export const App =() => {
 
  return (
    <>
    <RouterProvider router={route} />
    </>
  );
}
