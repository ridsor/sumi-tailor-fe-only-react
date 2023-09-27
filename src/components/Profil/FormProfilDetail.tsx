export default () => {
  return (
    <form method="post">
      <div className="form-input mb-4">
        <label htmlFor="name" className="font-bold block">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
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
        <button className="px-3 py-2 bg-two text-white rounded-md font-semibold hover:bg-four focus:ring focus:ring-[rgba(179,203,166,.5)]">
          Simpan
        </button>
      </div>
    </form>
  );
};
