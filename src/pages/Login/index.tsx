import axios from "axios";
import { useState } from "react";
import icon_google from "../../assets/img/icons/icons8-google.svg";
import login1 from "../../assets/img/login1.png";

interface InputsLogin {
  email: string;
  password: string;
}

const index = () => {
  const [inputsLogin, setInputsLogin] = useState<InputsLogin>({
    email: "",
    password: "",
  });
  const [nodeValidation, setNodeValidation] = useState<
    React.ReactNode | undefined
  >();

  const handleSubmitFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidationLogin()) return;

    // const data = await axios
    //   .post(backendURL + "/api/auth/login", inputsLogin)
    //   .then((res) => res.data);
    // if (data.status !== "success") console.error(data.message);
  };

  const handleValidationLogin = () => {
    setNodeValidation(undefined);

    const listValidation = [];
    var result = false;
    if (!inputsLogin.email) {
      listValidation.unshift("Email tidak boleh kosong.");
      result = true;
    }

    var rs = inputsLogin.email;
    var atps = rs.indexOf("@");
    var dots = rs.lastIndexOf(".");
    if (atps < 1 || dots < atps + 2 || dots + 2 >= rs.length) {
      listValidation.unshift("Alamat email tidak valid.");
      result = true;
    }

    if (!inputsLogin.password) {
      listValidation.unshift("Password tidak boleh kosong.");
      result = true;
    }

    if (listValidation.length > 0) {
      setNodeValidation(
        <div>
          <h5 className="text-red-500 text-center">
            Terdapat kesalahan yang terjadi
          </h5>
          <ul className="[list-style:inherit]">
            {listValidation.map((x, i) => (
              <li key={i} className="text-center">
                {x}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return result;
  };

  const handleChangeInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputsLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="pt-24 md:pb-4 bg-three">
        <div className="container max-w-full">
          {/* {(nodeValidation ? nodeValidation : '')}
			<form onSubmit={handleSubmitFormLogin} className="flex flex-col gap-3 w-full md:w-1/2 mx-auto mt-4">
				
				<input type="text" name="password" className="border" onChange={handleChangeInputLogin} />
				<button className="border bg-black text-white p-3">Login</button>
			</form> */}
          <div className="min-h-[500px] flex flex-wrap">
            <article className="w-full md:w-[calc(100%-400px)]  order-2 md:order-1">
              <div className="flex items-center w-full h-full">
                <div className="bg-[#E4EEDD] md:h-full w-full md:rounded-tr-xl md:rounded-br-xl md:shadow-sm flex justify-center items-center">
                  <div className="p-4">
                    <div className="w-[300px]">
                      <img src={login1} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-3xl text-center md:text-4xl mb-3 font-bold tracking-wide">
                      Selamat Datang Kembali
                    </h1>
                  </div>
                </div>
              </div>
            </article>
            <article className="w-full md:w-[400px] order-1 md:order-2">
              <div className="flex justify-center items-center p-8 h-full">
                <div className="w-full">
                  <h2 className="font-one font-bold text-3xl mb-1">Login</h2>
                  <p className="mb-6">
                    Silakan masuk ke akun Anda menggunakan informasi yang sudah
                    terdaftar.
                  </p>
                  <form onSubmit={handleSubmitFormLogin}>
                    <div className="form-input mb-2">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email address"
                        className="px-4 py-2 bg-[#F0F4F3] w-full border border-[#EEEEEE] outline-two rounded-md placeholder:text-one placeholder:font-medium"
                        onChange={handleChangeInputLogin}
                      />
                    </div>
                    <div className="form-input mb-2">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="px-4 py-2 bg-[#F0F4F3] w-full border border-[#EEEEEE] outline-two rounded-md placeholder:text-one placeholder:font-medium"
                        onChange={handleChangeInputLogin}
                      />
                    </div>
                    <div className="form-input flex gap-2 mb-2">
                      <input
                        type="checkbox"
                        name="remember_me"
                        id="remember_me"
                        className="accent-two"
                      />
                      <label htmlFor="remember_me">Remember Me</label>
                    </div>
                    <div className="form-input mb-2">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-two text-three rounded-md font-medium"
                      >
                        Login
                      </button>
                    </div>
                    <div className="form-input">
                      <button className="border border-[#EEEEEE] w-full px-4 py-1 rounded-md font-medium flex items-center justify-center">
                        <img src={icon_google} alt="icon google" />
                        <span className="ml-2">Sign in with Google</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
