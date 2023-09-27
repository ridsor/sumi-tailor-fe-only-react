export default () => {
  return (
    <form method="post">
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
  );
};
