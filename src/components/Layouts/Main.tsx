import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { routes } from "../../router";
import AuthMain from "./AuthLayouts/AuthMain";

const Main = () => {
  const location = useLocation();
  const [layouts, setLayouts] = useState<string>("main");

  useEffect(() => {
    if (layouts === "main") {
      document.body.classList.add("overflow-x-hidden");
    }
  }, []);

  useEffect(() => {
    for (const route of routes.main) {
      if ("/" + route === location.pathname) {
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
      return <>404</>;
  }
};

export default Main;
