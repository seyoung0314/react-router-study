import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import IndexPage from "../pages/IndexPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";
import BlogPostDetail from "../pages/BlogPostDetail";
import BlogLayout from "../layouts/BlogLayout";
import { Children } from "react";
import ErrorPage from "../pages/ErrorPage";

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <BlogPage />,
          },
          {
            path: "postId",
            element: <BlogPostDetail />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
