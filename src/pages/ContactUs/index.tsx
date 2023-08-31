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
      <section className="bg-three">
        <div className="container">
          <div className="relative pb-16 mx-auto lg:w-11/12 pt-36">
            <div className="w-0.5 h-32 absolute top-1/2 left-0 -translate-y-1/2 hidden lg:flex items-center">
              <div className="w-full bg-two h-4/6"></div>
            </div>
            <article className="px-4 lg:pl-24">
              <h2 className="mb-8 text-3xl font-one">
                Punya proyek fashion? Perlu perubahan untuk menyempurnakan
                pakaian Anda? Hubungi kami melalui salah satu halaman berikut,
                dan mari wujudkan impian fashion Anda.
              </h2>
              <form action="">
                <div className="relative mb-6 form-input">
                  <input
                    type="text"
                    name="nama_lengkap"
                    className="w-full max-w-lg border bg-[#F0F4F3] outline-none px-4 py-2 font-medium peer rounded-sm"
                    onChange={handleChangeInput}
                    required
                    autoComplete="off"
                  />
                  <label
                    className={`${
                      inputs.nama_lengkap ? "left-0 -top-5 " : "left-4 top-2 "
                    }absolute font-medium transition-all peer-focus:left-0 peer-focus:-top-5 z-10 ease-in`}
                  >
                    Nama Lengkap
                  </label>
                </div>
                <div className="relative mb-6 form-input">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    className="w-full max-w-lg border bg-[#F0F4F3] outline-two px-4 py-2 font-medium peer rounded-sm"
                    onChange={handleChangeInput}
                  />
                  <label
                    className={`${
                      inputs.email ? "left-0 -top-5 " : "left-4 top-2 "
                    }absolute font-medium transition-all peer-focus:left-0 peer-focus:-top-5 z-10 ease-in`}
                  >
                    Email
                  </label>
                </div>
                <div className="relative mb-9 form-input">
                  <textarea
                    name="pesan"
                    className="w-full border bg-[#F0F4F3] peer px-4 py-2 outline-two rounded-sm"
                    rows={6}
                    onChange={handleChangeInput}
                  ></textarea>
                  <label
                    className={`${
                      inputs.pesan ? "left-0 -top-5 " : "left-4 top-2 "
                    }absolute font-medium transition-all peer-focus:left-0 peer-focus:-top-5 z-10 ease-in`}
                  >
                    Pesan
                  </label>
                </div>
                <div className="form-input">
                  <button
                    className="flex items-center justify-center w-full max-w-xs p-3 text-three   bg-two rounded-sm gap-x-3"
                    type="submit"
                  >
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
