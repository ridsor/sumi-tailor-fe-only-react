import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Layouts/Main";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import Orders from "./pages/Orders/index";

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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: 'orders',
        element: <Orders/>,
      },
      {
        path: "*",
        element: <>Halaman tidak ada</>,
      },
    ],
  },
]);

export default router;
