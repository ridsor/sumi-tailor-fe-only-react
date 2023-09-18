import { Outlet } from "react-router-dom";
import Auth from "../Auth";
import AsideDashboard from "./DashboardAside";
import { useEffect, useState } from "react";

export default () => {
  const [sidebar, setSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth >= 768) setSideBar(true);
  }, []);

  return (
    <Auth>
      <main
        className={`${
          sidebar ? "md:left-[250px] md:w-[calc(100%-250px)]" : ""
        } left-[60px] w-[calc(100%-60px)] relative bg-three min-h-screen h-fit`}
      >
        <Outlet />
      </main>
      <AsideDashboard sidebar={sidebar} setSideBar={setSideBar} />
    </Auth>
  );
};
