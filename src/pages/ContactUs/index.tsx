import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

interface Input {
  nama_lengkap: string;
  email: string;
  pesan: string;
}

const Index = () => {
  const [inputs, setInputs] = useState<Input>({
    nama_lengkap: "",
    email: "",
    pesan: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="relative pb-16 mx-auto lg:w-11/12 pt-36">
            <div className="w-0.5 h-32 bg-[#f8f9fa] absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block">
              <div className="w-full bg-black h-4/6"></div>
            </div>
            <article className="px-4 lg:pl-24">
              <h2 className="mb-8 text-3xl font-pt-serif">
                Punya proyek fesyen? Perlu perubahan untuk menyempurnakan
                pakaian Anda? Hubungi kami melalui salah satu halaman berikut,
                dan mari wujudkan impian fesyen Anda.
              </h2>
              <form action="">
                <div className="relative pt-6 mb-6 form-input">
                  <input
                    type="text"
                    name="nama_lengkap"
                    className="w-full max-w-lg border bg-[#F8F9FA] outline-none focus:ring-gray-600 focus:ring-2 px-4 py-2 font-medium peer text-[#3d3d3d] rounded-sm"
                    onChange={handleChangeInput}
                    required
                    autoComplete="off"
                  />
                  <label
                    className={`${
                      inputs.nama_lengkap ? "left-0 top-0 " : "left-4 top-8 "
                    }absolute font-medium transition-all peer-focus:left-0 peer-focus:top-0 z-10 ease-in text-[#3d3d3d]`}>
                    Nama Lengkap
                  </label>
                </div>
                <div className="relative pt-6 mb-6 form-input">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    className="w-full max-w-lg border bg-[#F8F9FA] outline-none focus:ring-gray-600 focus:ring-2 px-4 py-2 font-medium peer text-[#3d3d3d] rounded-sm"
                    onChange={handleChangeInput}
                  />
                  <label
                    className={`${
                      inputs.email ? "left-0 top-0 " : "left-4 top-8 "
                    }absolute font-medium transition-all peer-focus:left-0 peer-focus:top-0 z-10 ease-in text-[#3d3d3d]`}>
                    Email
                  </label>
                </div>
                <div className="relative pt-6 mb-9 form-input">
                  <textarea
                    name="pesan"
                    className="w-full border bg-[#f8f9fa] peer text-[#3d3d3d] px-4 py-2 focus:ring-gray-500 focus:ring-2 outline-none rounded-sm"
                    rows={6}
                    onChange={handleChangeInput}></textarea>
                  <label
                    className={`${
                      inputs.pesan ? "left-0 top-0 " : "left-4 top-8 "
                    }absolute font-medium transition-all peer-focus:left-0 peer-focus:top-0 z-10 ease-in text-[#3d3d3d]`}>
                    Pesan
                  </label>
                </div>
                <div className="form-input">
                  <button
                    className="flex items-center justify-center w-full max-w-xs p-3 text-white bg-black rounded-sm gap-x-3"
                    type="submit">
                    <p>Send</p> <AiOutlineSend />
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
