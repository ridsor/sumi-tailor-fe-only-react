import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { routes } from "../../App";
import AuthMain from "./AuthLayouts/AuthMain";
import Loading from "../Loading";

const Main = () => {
  const location = useLocation();
  const [layouts, setLayouts] = useState<string>("default");

  useEffect(() => {
    for (const route of routes.main) {
      if ("/" + route === location.pathname || route === "*") {
        if (layouts === "main") break;
        setLayouts("main");
        break;
      }
    }

    for (const route of routes.auth) {
      if ("/" + route === location.pathname) {
        if (layouts === "auth") break;
        setLayouts("auth");
        break;
      }
    }

    if (layouts === "main" || layouts === "default") {
      document.body.classList.add("overflow-x-hidden");
    } else {
      document.body.classList.remove("overflow-x-hidden");
    }
  }, [location]);

  switch (layouts) {
    case "main":
      return (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      );
    case "auth":
      return <AuthMain />;
    default:
      return <Loading />;
  }
};

export default Main;
