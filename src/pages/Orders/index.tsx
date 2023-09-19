import OrderList from "../../components/Orders/OrderList";

export default () => {
  return (
    <>
      <section className="pt-36 pb-16 bg-[#E5E9EC]">
        <div className="container">
          <article className="px-4">
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
