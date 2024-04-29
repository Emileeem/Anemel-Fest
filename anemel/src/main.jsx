import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignInComponent } from './components/SignInComponent';
import { LoginComponent } from './components/LoginComponent';
import App from './App';

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Crie-Sua-Conta",
    element: <SignInComponent/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
