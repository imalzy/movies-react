// src/router.tsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet,
} from "react-router-dom";
import { Home } from "../pages/Home";
import Navbar from "../components/Navbar";
import ErrorPage from "../pages/Error";
import Banner from "../components/Banner";
import Section from "../components/Section";

const AppLayout = () => (
  <>
    <Navbar />
    <Banner />
    <Section>
      <Outlet />
    </Section>
  </>
);

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
