import AsideDashboard from "./AuthAside";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default () => {
  const [sidebar, setSideBar] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },200);
    
    if (window.innerWidth >= 768) setSideBar(true);
  }, []);

  return (
    <>
    {isLoading?<Loading/>:(
      <>
        <main
          className={`${
            sidebar ? "md:left-[250px] md:w-[calc(100%-250px)]" : ""
          } left-[60px] w-[calc(100%-60px)] relative bg-three min-h-screen h-fit`}
        >
          <Outlet/>
        </main>
        <AsideDashboard sidebar={sidebar} setSideBar={setSideBar} />
      </>
    )}
    </>
      
  );
};
