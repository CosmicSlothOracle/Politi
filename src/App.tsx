import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import InGamePage from './components/InGamePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/play",
    element: <InGamePage />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
