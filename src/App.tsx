import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import InGamePage from './components/InGamePage';

// Create router configuration with basename for GitHub Pages
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/play",
      element: <InGamePage />
    }
  ],
  {
    basename: '/Politi-Cat', // Add basename for GitHub Pages
    // Use type assertion for future flags
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    } as any
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
