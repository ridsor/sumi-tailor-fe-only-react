import { FaArrowRightLong, FaArrowUpLong } from "react-icons/fa6";
import logoWhatsapp from "../../assets/img/icons/logo-whatsapp.svg";

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row pt-36 min-h-[600px] h-auto [background-size:400px] bg-[80%_8rem] bg-no-repeat px-4 lg:bg-[url('/src/assets/img/background-home.png')]">
            <article className="w-full lg:w-1/2">
              <h1 className="mb-4 text-3xl lg:text-4xl tracking-wide font-pt-serif">
                Selamat Datang di Sumi Tailor <br />
                Kami Tempat Fashion Bertemu Kesempurnaan!
              </h1>
              <p className="text-[#3d3d3d] w-5/6 mb-6">
                Apakah Anda lelah berjuang dengan pakaian yang tidak pas? Apakah
                Anda bermimpi mengenakan pakaian yang disesuaikan dengan bentuk
                dan gaya tubuh unik Anda? Tidak perlu mencari lagi! Tim penjahit
                terampil dan berpengalaman kami hadir untuk mewujudkan aspirasi
                mode Anda.
              </p>
              <div className="flex gap-x-3 mb-6">
                <a
                  href="/orders"
                  className="text-[#ccc] bg-[#0f0f0f] py-3 px-5 rounded-full flex items-center gap-x-1.5 hover:bg-[#333] focus:ring focus:ring-[rgba(0,0,0,.3)]">
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
