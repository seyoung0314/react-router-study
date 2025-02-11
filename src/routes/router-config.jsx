import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";
import RootLayout from "../layouts/RootLayout";
import { Children } from "react";

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
