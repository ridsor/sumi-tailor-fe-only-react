import { FaArrowRightFromBracket, FaInbox, FaPencil } from "react-icons/fa6";
import logo from "../../../vite.svg";
import user_img from "../../assets/img/user-img.svg";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiShieldUserFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa6";
import React from "react";

interface Props {
  sidebar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default ({ sidebar, setSideBar }: Props) => {
  return (
    <aside className="fixed top-0 bottom-0 left-0 right-0 md:right-auto">
      <div className="relative w-full h-full">
        {sidebar ? (
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.2)] md:hidden"
            onClick={() => setSideBar(false)}
          ></div>
        ) : (
          ""
        )}
        <div
          className={`${
            sidebar ? " w-[250px]" : "w-fit"
          } h-screen min-h-fit relative z-50`}
        >
          <div
            className={`${
              sidebar ? "right-3 top-3" : "-right-5 top-11"
            } absolute bg-three z-10 rounded-full p-1 flex items-center justify-center`}
          >
            <button
              className="rounded-full bg-two text-three active:ring active:ring-[rgba(0,0,0,.1)]"
              onClick={() => setSideBar((prev) => !prev)}
            >
              <div className="p-2">
                <FaPlay
                  className={`${
                    sidebar ? "-rotate-180" : ""
                  } text-lg transition`}
                />
              </div>
            </button>
          </div>
          <article
            className={`bg-[#E4EEDD] w-full h-full grid px-2 py-4 overflow-auto rounded-tr-2xl rounded-br-2xl`}
          >
            <div>
              <div className="brand flex items-center mb-3">
                <div className={`p-1.5`}>
                  <img src={logo} alt="logo" className="h-8 aspect-square" />
                </div>
                {sidebar ? (
                  <span className="font-semibold text-base font-one">
                    Sumi Tailor
                  </span>
                ) : (
                  ""
                )}
              </div>
              <hr className="border-top border-[#d7d3cc] mb-3" />
              <div
                className={`${
                  sidebar ? "px-2" : ""
                } user-profile relative mb-3`}
              >
                <div
                  className={`${
                    sidebar ? "w-[70px]" : "w-[44px]"
                  } user-img aspect-square mx-auto mb-1`}
                >
                  <img
                    src={user_img}
                    alt="user_img"
                    className="w-full h-full object-cover object-center rounded-full shadow-sm border-2 border-[#d7d3cc]"
                  />
                </div>
                {sidebar ? (
                  <>
                    <div className="user-name text-center font-semibold">
                      Admin
                    </div>
                    <button type="button" className="absolute top-0 right-0">
                      <div className="p-2 bg-two hover:bg-four text-white rounded-full active:ring active:ring-three">
                        <FaPencil />
                      </div>
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
              <hr className="border-top border-[#d7d3cc]" />
              <ul
                className={`${
                  sidebar ? "p-2" : "py-2"
                } flex flex-col font-semibold`}
              >
                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center hover:bg-four rounded-md active:ring active:ring-three"
                  >
                    <div className="p-3">
                      <TbLayoutDashboard className="text-xl" />
                    </div>
                    {sidebar ? "Dashboard" : ""}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="flex items-center hover:bg-four rounded-md active:ring active:ring-three"
                  >
                    <div className="p-3">
                      <FaShoppingCart className="text-xl" />
                    </div>
                    {sidebar ? "Pesanan" : ""}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inbox"
                    className="flex items-center hover:bg-four rounded-md active:ring active:ring-three"
                  >
                    <div className="p-3">
                      <FaInbox className="text-xl" />
                    </div>
                    {sidebar ? "Kotak Masuk" : ""}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className="flex items-center hover:bg-four rounded-md active:ring active:ring-three"
                  >
                    <div className="p-3">
                      <RiShieldUserFill className="text-xl" />
                    </div>
                    {sidebar ? "Admin" : ""}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="self-end">
              <hr className="border-top border-[#d7d3cc] mb-2" />
              <button className="flex items-center hover:bg-four rounded-md w-full font-semibold active:ring active:ring-three">
                <div className="p-3">
                  <FaArrowRightFromBracket className="text-xl" />
                </div>
                {sidebar ? "Sign Out" : ""}
              </button>
            </div>
          </article>
        </div>
      </div>
    </aside>
  );
};
