import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Portable from "../pages/portable/Portable";
import Adventurer from "../pages/adventurer/Adventurer";
import Book from "../pages/book/Book";
import CseduMain from "../pages/csedu/CseduMain";
import MediMain from "../pages/MediMain/MediMain";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
        loader: () => fetch("projects.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/bookUniverse",
        element: <Book></Book>,
        loader: () => fetch("bookUniverse.json"),
      },
      {
        path: "/adventurer",
        element: <Adventurer></Adventurer>,
        loader: () => fetch("adventurer.json"),
      },
      {
        path: "/portable",
        element: <Portable></Portable>,
        loader: () => fetch("portable.json"),
      },
      {
        path: "/cseduthesis",
        element: <CseduMain></CseduMain>,
        loader: () => fetch("cseduthesis.json"),
      },
      {
        path: "/mediservice",
        element: <MediMain></MediMain>,
        loader: () => fetch("mediservice.json"),
      },
    ],
  },
]);
