import { lazy } from "react";
const Home = lazy(() => import("../page/Home"));

const Contact = lazy(() => import("../page/Contact"));
const About = lazy(() => import("../page/About"));
const Service = lazy(() => import("../page/Service"));

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
