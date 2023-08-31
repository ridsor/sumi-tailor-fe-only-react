import { FaArrowRightLong, FaArrowUpLong } from "react-icons/fa6";
import logoWhatsapp from "../../assets/img/icons/logo-whatsapp.svg";
import home1 from "../../assets/img/home1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const index = () => {
  const [chatWa, setChatWa] = useState<string>("");

  const getFormatChatWa = () => {
    let result = null;
    const now = Date.now();
    const time = parseInt(
      Intl.DateTimeFormat("id-ID", {
        hour: "numeric",
      }).format(now)
    );

    if (time >= 18) {
      result = "Malam";
    } else if (time >= 15) {
      result = "Sore";
    } else if (time >= 11) {
      result = "Siang";
    } else {
      result = "Pagi";
    }

    setChatWa(`Selamat ${result} Pak/Ibu`);
  };

  useEffect(() => {
    getFormatChatWa();
  }, []);

  return (
    <>
      <section className="bg-three">
        <div className="container">
          <div className="row pt-36 min-h-[600px] h-auto px-4 flex flex-wrap">
            <article className="w-full lg:w-1/2">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-wide font-one text-one">
                Selamat Datang di Sumi Tailor <br />
                Kami Tempat Fashion Bertemu Kesempurnaan!
              </h2>
              <p className="text-one w-5/6 mb-6">
                Apakah Anda lelah berjuang dengan pakaian yang tidak pas? Apakah
                Anda bermimpi mengenakan pakaian yang disesuaikan dengan bentuk
                dan gaya tubuh unik Anda? Tidak perlu mencari lagi! Tim penjahit
                terampil dan berpengalaman kami hadir untuk mewujudkan aspirasi
                mode Anda.
              </p>
              <div className="flex gap-x-3 mb-6">
                <Link
                  to="/orders"
                  className="text-three bg-two py-3 px-5 rounded-full flex items-center gap-x-1.5 hover:bg-four focus:ring focus:ring-[rgba(179,203,166,.5)]"
                >
                  Cek Pesanan
                  <FaArrowRightLong className="fill-three" />
                </Link>
                <Link
                  to="/about-us"
                  className="text-two border border-two hover:bg-four hover:text-three py-3 px-5 rounded-full flex items-center gap-x-1.5 focus:ring focus:ring-[rgba(179,203,166,.5)]"
                >
                  Selengkapnya
                </Link>
              </div>
            </article>
            <article className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <div className="w-[400px]">
                  <img src={home1} alt="" className="w-full h-full" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div id="contact-us" className="fixed bottom-[6.2rem] right-10">
        <a
          href={`https://wa.me/6282244007725?text='${chatWa}'`}
          target="_blank"
        >
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
