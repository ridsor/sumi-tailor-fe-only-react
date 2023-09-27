import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  active: boolean;
  bg?: string;
};

export default ({ children, active, bg }: Props) => {
  useEffect(() => {
    if (active) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [active]);

  return (
    <div
      className={`${
        active
          ? "opacity-100 pointer-events-none"
          : "opacity-0 pointer-events-none"
      } transition-all fixed bg-[rgba(0,0,0,.5)] top-0 bottom-0 right-0 left-0 z-50`}
    >
      <div className="flex w-full h-full">
        <div className="mx-auto w-full max-w-[500px] overflow-auto">
          <div
            className={`w-full rounded-md h-[500px] shadow-md ${
              !bg ? "bg-white" : ""
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
