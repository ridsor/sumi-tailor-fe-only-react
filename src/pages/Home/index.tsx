import { FaArrowRightLong, FaArrowUpLong } from "react-icons/fa6";
import logoWhatsapp from "../../assets/img/icons/logo-whatsapp.svg";

const index = () => {
  return (
    <>
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
      <div id="contact-us" className="fixed bottom-[6.2rem] right-10">
        <a href="">
          <div className="w-10 aspect-square bg-[#2BB741] p-1 rounded-full shadow-md">
            <img src={logoWhatsapp} alt="" />
          </div>
        </a>
        <div className="absolute -translate-y-1/2 top-1/2 -left-[6.3rem]">
          <div className="absolute block w-5 rotate-45 -translate-y-1/2 bg-white aspect-square -right-0.5 top-1/2 scale-90"></div>
          <div className="px-3 py-1 text-[#0f0f0f] bg-white  whitespace-nowrap rounded-xl [box-shadow:0_0_.5rem_0rem_rgba(0,0,0,.2)]">
            <span className="relative z-10">Contact Us</span>
          </div>
        </div>
        <div className="absolute -translate-x-1/2 -bottom-10 left-1/2">
          <div className="flex items-center justify-center w-8 p-1 bg-white rounded-full [box-shadow:0_0_.5rem_0rem_rgba(0,0,0,.2)] aspect-square">
            <FaArrowUpLong className="fill-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
