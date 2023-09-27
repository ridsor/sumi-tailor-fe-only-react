import user_img from "../../../assets/img/user-img.svg";

const index = () => {
  return (
    <>
      <section>
        <div className="container max-w-full">
          <div className="p-4">
            <h1 className="text-3xl font-one tracking-wide mb-3 font-semibold">
              Profil
            </h1>
            <form method="post">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 rounded-full aspect-square overflow-hidden">
                  <img src={user_img} alt="" className="w-full h-full" />
                </div>
                <button className="px-3 py-2 bg-one text-white rounded-md font-semibold hover:bg-[rgba(72,60,50,.5)] focus:ring focus:ring-[rgba(72,60,50,.5)]">
                  Upload
                </button>
                <button className="px-3 py-2 bg-gray-200 text-one rounded-md font-semibold hover:bg-gray-300 focus:ring focus:ring-[rgba(209,213,219,.5)]">
                  Hapus
                </button>
              </div>
              <div className="form-input mb-4">
                <label htmlFor="nama" className="font-bold block">
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="p-2 border-2 w-full max-w-md rounded-md"
                />
              </div>
              <div className="form-input mb-4">
                <label htmlFor="email" className="font-bold block">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="p-2 border-2 w-full max-w-md rounded-md"
                />
              </div>
              <div className="form-input mb-4">
                <label htmlFor="password_lama" className="font-bold block">
                  Password Lama
                </label>
                <input
                  type="password"
                  id="password_lama"
                  name="password_lama"
                  className="p-2 border-2 w-full max-w-md rounded-md"
                />
              </div>
              <div className="form-input mb-4">
                <label htmlFor="password_baru" className="font-bold block">
                  Password Baru
                </label>
                <input
                  type="password"
                  id="password_baru"
                  name="password_baru"
                  className="p-2 border-2 w-full max-w-md rounded-md"
                />
              </div>
              <div className="form-input mb-4">
                <button className="px-3 py-2 bg-two text-white rounded-md font-semibold hover:bg-four focus:ring focus:ring-[rgba(179,203,166,.5)]">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
