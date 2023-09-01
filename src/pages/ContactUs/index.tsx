import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

interface Input {
  full_name: string;
  email: string;
  message: string;
}

const Index = () => {
  const [inputs, setInputs] = useState<Input>({
    full_name: "",
    email: "",
    message: "",
  });
  const [validate, setValidate] = useState<Input>({
    full_name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleValidationContact();
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleValidationContact = () => {
    var full_name: string = "";
    var email: string = "";
    var message: string = "";

    // full_name
    if (!inputs.full_name) {
      full_name = "Nama Lengkap tidak boleh kosong.";
    }

    // email
    var rs = inputs.email;
    var atps = rs.indexOf("@");
    var dots = rs.lastIndexOf(".");
    if (!inputs.email) {
      email = "Email tidak boleh kosong";
    } else if (atps < 1 || dots < atps + 2 || dots + 2 >= rs.length) {
      email = "Alamat email tidak valid";
    }

    // message
    if (!inputs.message) {
      message = "Pesan tidak boleh kosong.";
    }

    setValidate({
      full_name,
      email,
      message,
    });
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
              <form onSubmit={handleFormSubmit} method="post">
                <div className="relative mb-6 form-input">
                  <input
                    type="text"
                    name="full_name"
                    className={`${
                      validate.full_name ? "border-fail" : ""
                    } w-full max-w-lg border-2 bg-[#F0F4F3] outline-none px-4 py-2 font-medium peer rounded-sm`}
                    onChange={handleChangeInput}
                    autoComplete="off"
                  />
                  <label
                    className={`${
                      inputs.full_name ? "left-0 -top-5" : "left-4 top-2"
                    } ${
                      validate.full_name ? "text-fail" : ""
                    } pointer-events-none absolute font-bold transition-all peer-focus:left-0 peer-focus:-top-5 z-10 ease-in`}
                  >
                    {validate.full_name ? validate.full_name : "Nama Lengkap"}
                  </label>
                </div>
                <div className="relative mb-6 form-input">
                  <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    className={`${
                      validate.email ? "border-fail" : ""
                    } w-full max-w-lg border-2 bg-[#F0F4F3] outline-none px-4 py-2 font-medium peer rounded-sm`}
                    onChange={handleChangeInput}
                  />
                  <label
                    className={`${
                      inputs.email ? "left-0 -top-5" : "left-4 top-2"
                    } ${
                      validate.email ? "text-fail" : ""
                    } pointer-events-none absolute font-bold transition-all peer-focus:left-0 peer-focus:-top-5 z-10 ease-in`}
                  >
                    {validate.email ? validate.email : "Email"}
                  </label>
                </div>
                <div className="relative mb-9 form-input">
                  <textarea
                    name="message"
                    className={`${
                      validate.message ? "border-fail" : ""
                    } w-full max-w-lg border-2 bg-[#F0F4F3] outline-none px-4 py-2 font-medium peer rounded-sm`}
                    rows={6}
                    onChange={handleChangeInput}
                  ></textarea>
                  <label
                    className={`${
                      inputs.message ? "left-0 -top-5" : "left-4 top-2"
                    } ${
                      validate.message ? "text-fail" : ""
                    } pointer-events-none absolute font-bold transition-all peer-focus:left-0 peer-focus:-top-5 z-10 ease-in`}
                  >
                    {validate.message ? validate.message : "Pesan"}
                  </label>
                </div>
                <div className="form-input">
                  <button className="flex items-center justify-center w-full max-w-xs p-3 text-three bg-two rounded-sm gap-x-3">
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
