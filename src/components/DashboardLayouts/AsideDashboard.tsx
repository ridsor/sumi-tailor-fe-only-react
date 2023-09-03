import { FaArrowRightFromBracket, FaInbox, FaPencil } from "react-icons/fa6";
import logo from "../../../vite.svg";
import user_img from "../../assets/img/user-img.svg";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiShieldUserFill } from "react-icons/ri";

export default () => {
  return (
    <aside className="order-1 bg-[#E4EEDD] fixed top-0 bottom-0 left-0 rounded-tr-2xl rounded-br-2xl">
      <article className="grid px-2 py-4 w-[250px] h-screen min-h-fit overflow-auto">
        <div>
          <div className="brand flex gap-2 items-center mb-3 px-2">
            <div className="h-8 aspect-square">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
            <span className="font-semibold text-base font-one">
              Sumi Tailor
            </span>
          </div>
          <hr className="border-top border-[#d7d3cc] mb-3" />
          <div className="user-profile px-2 relative mb-3">
            <div className="user-img w-[70px] aspect-square mx-auto mb-1">
              <img
                src={user_img}
                alt="user_img"
                className="w-full h-full object-cover object-center rounded-full shadow-sm border-2 border-[#d7d3cc]"
              />
            </div>
            <div className="user-name text-center font-semibold">Admin</div>
            <button type="button" className="absolute top-0 right-0">
              <div className="p-2 bg-two hover:bg-four text-white rounded-full active:ring active:ring-three">
                <FaPencil />
              </div>
            </button>
          </div>
          <hr className="border-top border-[#d7d3cc]" />
          <ul className="flex flex-col p-2 font-semibold">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center hover:bg-four rounded-md active:ring active:ring-three"
              >
                <div className="p-3">
                  <TbLayoutDashboard className="text-xl" />
                </div>
                Dashboard
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
                Pesanan
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
                Kotak Masuk
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
                Admin
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
            Sign Out
          </button>
        </div>
      </article>
    </aside>
  );
};
