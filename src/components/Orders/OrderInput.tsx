import { FaXmark } from "react-icons/fa6";
import Modal from "../Modal";

type Props = {
  active: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
};

export default ({ active, set }: Props) => {
  return (
    <Modal active={active} set={set}>
      <div className="container max-w-full">
        <div className="title-modal font-semibold text-xl px-3 py-2 border-b relative">
          Buat Pesanan
          <button
            className="absolute top-1/2 -translate-y-1/2 right-3"
            tabIndex={active ? 1 : undefined}
            onClick={() => set(false)}
          >
            <FaXmark />
          </button>
        </div>
        <form method="post" className="p-4">
          <div className="form-input mb-3">
            <input
              type="text"
              placeholder="Nama"
              name="name"
              className="w-full border rounded-sm py-2 px-3"
            />
          </div>
          <div className="form-input mb-3">
            <input
              type="text"
              placeholder="Kategori"
              name="category"
              className="w-full border rounded-sm py-2 px-3"
            />
          </div>
          <div className="form-input mb-3">
            <input
              type="text"
              placeholder="Harga"
              name="price"
              className="w-full border rounded-sm py-2 px-3"
            />
          </div>
          <div className="form-input mb-3">
            <textarea
              name="description"
              placeholder="Deskripsi"
              rows={3}
              className="w-full border rounded-sm py-2 px-3"
            ></textarea>
          </div>
          <div className="form-input">
            <button className="w-full bg-two px-3 py-2 text-white rounded-sm font-semibold">
              Buat
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
