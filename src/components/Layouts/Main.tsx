import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useMemo, useState } from "react";
import { routes } from "../../App";
import AuthMain from "./AuthLayouts/AuthMain";
import Loading from "../Loading";

const Main = () => {
  const location = useLocation();
  const [layouts, setLayouts] = useState<string>("default");

  useMemo(() => {
    for (const route of routes.main) {
      if (layouts === "main") break;
      if ("/" + route === location.pathname || location.pathname === "*") {
        setLayouts("main");
        break;
      }
    }

    for (const route of routes.auth) {
      if (layouts === "auth") break;
      if ("/" + route === location.pathname) {
        setLayouts("auth");
        break;
      }
    }

    if (layouts === "main") {
      document.body.classList.add("overflow-x-hidden");
    } else {
      document.body.classList.remove("overflow-x-hidden");
    }
    console.log("a");
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
