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
  const [validate, setValidate] = useState<InputsLogin>({
    email: "",
    password: "",
  });

  const handleSubmitFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleValidationLogin();

    // const data = await axios
    //   .post(backendURL + "/api/auth/login", inputsLogin)
    //   .then((res) => res.data);
    // if (data.status !== "success") console.error(data.message);
  };

  const handleValidationLogin = () => {
    var email: string = "";
    var password: string = "";

    // email
    var rs = inputsLogin.email;
    var atps = rs.indexOf("@");
    var dots = rs.lastIndexOf(".");
    if (!inputsLogin.email) {
      email = "Email tidak boleh kosong";
    } else if (atps < 1 || dots < atps + 2 || dots + 2 >= rs.length) {
      email = "Alamat email tidak valid";
    }

    // password
    if (!inputsLogin.password) {
      password = "Password tidak boleh kosong.";
    }

    setValidate({
      email,
      password,
    });
  };

  const handleChangeInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputsLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="pt-24 md:pb-4 bg-three">
        <div className="container max-w-full">
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
                  <form onSubmit={handleSubmitFormLogin} method="post">
                    <div className="form-input mb-2 relative">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className={`${
                          validate.email ? "border-fail" : "border-two"
                        } px-4 py-2 bg-three w-full border-2 rounded-md font-semibold outline-none`}
                        onChange={handleChangeInputLogin}
                      />
                      <label
                        htmlFor="email"
                        className={`${
                          validate.email ? "text-fail" : "text-two"
                        } absolute -top-2 left-3 bg-three px-2 text-[13px] font-bold`}
                      >
                        {validate.email ? validate.email : "Email"}
                      </label>
                    </div>
                    <div className="form-input mb-2 relative">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className={`${
                          validate.password ? "border-fail" : "border-two"
                        } px-4 py-2 bg-three w-full border-2 rounded-md font-semibold outline-none`}
                        onChange={handleChangeInputLogin}
                      />
                      <label
                        htmlFor="password"
                        className={`${
                          validate.password ? "text-fail" : "text-two"
                        } absolute -top-2 left-3 bg-three px-2 text-[13px] font-bold`}
                      >
                        {validate.password ? validate.password : "Password"}
                      </label>
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
