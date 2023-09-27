import { FaSearch } from "react-icons/fa";
import AdminList from "../../../components/Admin/AdminList";

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="p-4">
            <h1 className="text-3xl font-one mb-3 tracking-wide font-semibold">
              Admin
            </h1>
            <div className="search relative w-full max-w-[400px] mb-3">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 pr-8 py-1 rounded-md border  w-full"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-3">
                <FaSearch />
              </button>
            </div>
            <AdminList />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
