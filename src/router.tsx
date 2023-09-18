import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Layouts/Main";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export const routes = {
  main: [
    '',
    '*',
    'about',
    'gallery',
    'service',
    'contact',
    'orders',
    'login',
  ],
  auth: [
    'dashboard',
    'profile'
  ]
}

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
        path: routes.main[2],
        element: <AboutUs />,
      },
      {
        path: routes.main[3],
        element: <Gallery />,
      },
      {
        path: routes.main[4],
        element: <Service />,
      },
      {
        path: routes.main[5],
        element: <ContactUs />,
      },
      {
        path: routes.main[6],
        element: <Orders />,
      },
      {
        path: routes.main[7],
        element: <Login />,
      },
      {
        path: "*",
        element: <>Halaman tidak ada</>,
      },
      {
        path: routes.auth[0],
        element: <Dashboard />,
      },
      {
        path: routes.auth[1],
        element: <Profile/>
      }
    ],
  },
]);

export default router;
