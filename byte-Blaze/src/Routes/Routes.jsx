import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";
import Blogs from "../Pages/Blogs";
import Author from "../Components/Author";
import Content from "../Components/Content";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
  
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
    {
      path: '/blog/:id',
      element:<Blog />,
      loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
      children: [
        {
          path: 'content',
          element: <Content />,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        },
        {
            path: 'author',
            element: <Author />
        }
      ],
    }
  ]);