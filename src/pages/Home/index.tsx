import { FaArrowRightLong } from "react-icons/fa6";

const index = () => {
  return (
    <section>
      <div className="container pt-16 h-[500px] [background-size:400px] bg-[80%_4rem] bg-no-repeat px-4 lg:bg-[url('/src/assets/img/background-home.png')]">
        <article className="w-full lg:w-1/2">
          <h1 className="mb-4 text-4xl tracking-wide font-pt-serif">
            Make Your Life Easier with Smart Home
          </h1>
          <p className="text-[#3d3d3d] w-5/6 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            impedit quaerat cumque alias qui exercitationem in minus aliquid
            modi quo!
          </p>
          <div className="flex gap-x-3">
            <a
              href="/orders"
              className="text-[#ccc] bg-[#0f0f0f] py-3 px-5 rounded-full flex items-center gap-x-1.5">
              Cek Pesanan
              <FaArrowRightLong className="fill-white" />
            </a>
            <a
              href="/orders"
              className="text-[#0f0f0f] border border-[#0f0f0f] bg-white py-3 px-5 rounded-full flex items-center gap-x-1.5">
              Selengkapnya
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default index;
