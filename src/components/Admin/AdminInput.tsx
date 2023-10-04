import { FaXmark } from "react-icons/fa6";
import Modal from "../Modal";

type Props = {
  active: boolean;
  close: () => void;
};

export default ({ active, close }: Props) => {
  return (
    <Modal active={active} close={close}>
      <div className="container max-w-full">
        <div className="title-modal font-semibold text-xl px-3 py-2 border-b relative">
          Tambah Admin
          <button
            className="absolute top-1/2 -translate-y-1/2 right-3"
            tabIndex={active ? 1 : undefined}
            onClick={close}
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
              placeholder="Email"
              name="email"
              className="w-full border rounded-sm py-2 px-3"
            />
          </div>
          <div className="form-input mb-3">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full border rounded-sm py-2 px-3"
            />
          </div>
          <div className="form-input mb-3">
            <input
              type="password"
              placeholder="Konfirmasi Password"
              name="confirm_password"
              className="w-full border rounded-sm py-2 px-3"
            />
          </div>
          <div className="form-input">
            <button className="w-full bg-two px-3 py-2 text-white rounded-sm font-semibold">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
