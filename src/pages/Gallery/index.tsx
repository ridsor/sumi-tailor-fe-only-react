const index = () => {
  return (
    <>
      <section className="bg-[#F1F2F3]">
        <div className="container">
          <div className="pt-36 h-[1200px] pb-16">
            <article className="grid h-full gap-4 p-4 bg-white shadow-md rounded-xl">
              <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-red-500 shadow-md rounded-xl"></div>
              <div className="col-start-3 row-start-1 bg-green-500 shadow-md rounded-xl"></div>
              <div className="col-start-4 row-start-1 bg-yellow-500 shadow-md rounded-xl"></div>
              <div className="col-start-3 col-end-5 row-start-2 bg-blue-500 shadow-md rounded-xl"></div>
              <div className="col-start-5 row-start-1 row-end-3 bg-orange-500 shadow-md rounded-xl"></div>
              <div className="col-start-1 row-start-3 row-end-5 bg-orange-500 shadow-md rounded-xl"></div>
              <div className="col-start-2 col-end-4 row-start-3 bg-blue-500 shadow-md rounded-xl"></div>
              <div className="col-start-2 row-start-4 bg-yellow-500 shadow-md rounded-xl"></div>
              <div className="col-start-3 row-start-4 bg-green-500 shadow-md rounded-xl"></div>
              <div className="col-start-4 col-end-6 row-start-3 row-end-5 bg-red-500 shadow-md rounded-xl"></div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
