<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
=======
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
>>>>>>> e3444cf4fd562416e937f46213165a2f0aadb2e3
    element: <App />,
  },
]);

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(
=======
ReactDOM.createRoot(document.getElementById("root")).render(
>>>>>>> e3444cf4fd562416e937f46213165a2f0aadb2e3
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
