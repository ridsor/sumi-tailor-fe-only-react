import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./components/Layouts/Main";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Dashboard from "./pages/Auth/Dashboard";
import Profile from "./pages/Auth/Profile";
import Admin from "./pages/Auth/Admin";

export const routes = {
  main: ["", "*", "about", "gallery", "service", "contact", "orders", "login"],
  auth: ["dashboard", "profile", "admin"],
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.main[0]} element={<Main />}>
        <Route path={routes.main[1]} element={<>Halaman tidak ada</>} />
        <Route index element={<Home />} />
        <Route path={routes.main[2]} element={<AboutUs />} />
        <Route path={routes.main[3]} element={<Gallery />} />
        <Route path={routes.main[4]} element={<Service />} />
        <Route path={routes.main[5]} element={<ContactUs />} />
        <Route path={routes.main[6]} element={<Orders />} />
        <Route path={routes.main[7]} element={<Login />} />
        <Route path={routes.auth[0]} element={<Dashboard />} />
        <Route path={routes.auth[1]} element={<Profile />} />
        <Route path={routes.auth[2]} element={<Admin />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
