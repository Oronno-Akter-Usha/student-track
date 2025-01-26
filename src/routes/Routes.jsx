import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <h1>Hello</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
