import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import OrderInput from "../../components/Orders/OrderInput";
import OrderList from "../../components/Orders/OrderList";

export default () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <>
      <section className="pt-36 pb-16 bg-[#E5E9EC]">
        <div className="container">
          <article className="px-4">
            <button
              onClick={() => setIsModal((prev) => !prev)}
              className="fixed bottom-5 right-5 p-3 border border-white bg-two text-white rounded-md text-xl hover:bg-four focus:ring focus:ring-[rgba(179,203,166,.5)] z-40"
            >
              <FaPlus />
            </button>
            <OrderInput active={isModal} />
            <div className="bg-white p-4 lg:p-7 shadow-md rounded-xl relative">
              <h2 className="text-2xl font-bold mb-2">Daftar Pesanan</h2>
              <p className="text-gray-500 mb-4">Lihat pesanan Anda disini.</p>
              <OrderList />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
