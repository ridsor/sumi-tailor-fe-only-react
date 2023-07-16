import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Layouts/Main";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <>Halaman tidak ada</>,
      },
    ],
  },
]);

export default router;
