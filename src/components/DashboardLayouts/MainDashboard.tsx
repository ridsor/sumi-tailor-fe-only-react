import { Outlet } from "react-router-dom";
import Auth from "../Auth";
import AsideDashboard from "./AsideDashboard";
import { FaPlay } from "react-icons/fa6";

export default () => {
  return (
    <Auth>
      <main className="relative left-[250px] w-[calc(100%-250px)] bg-three min-h-screen h-fit pl-4">
        <div className="absolute -left-7 top-[110px] bg-three z-10 rounded-full p-1 flex items-center justify-center">
          <button className="rounded-full bg-two text-three active:ring active:ring-[rgba(0,0,0,.1)]">
            <div className="p-3">
              <FaPlay className="text-lg -rotate-180" />
            </div>
          </button>
        </div>
        <Outlet />
      </main>
      <AsideDashboard />
    </Auth>
  );
};
