import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

type Props = {
  totalItems?: number;
  totalPages: number;
  currentPage: number;
  handleChangeCurrentPage(page: number): void;
};

export default ({
  totalPages,
  currentPage,
  handleChangeCurrentPage,
}: Props) => {
  return (
    <div className="pagination flex justify-center flex-row gap-3 font-semibold flex-wrap">
      <div className="w-full lg:w-fit flex justify-center gap-3">
        {currentPage >= 4 ? (
          <button
            onClick={() => handleChangeCurrentPage(1)}
            className="leading-none aspect-square w-9 flex justify-center items-center bg-gray-200 text-base rounded-full text-[#0F0F0F]"
          >
            <FaAnglesLeft />
          </button>
        ) : (
          ""
        )}
        <button
          disabled={currentPage < 2}
          onClick={() => handleChangeCurrentPage(currentPage - 1)}
          className="leading-none aspect-square w-9 flex justify-center items-center bg-gray-200 text-base rounded-full text-[#0F0F0F]"
        >
          <FaAngleLeft />
        </button>
      </div>
      {currentPage >= 3 ? (
        <button
          onClick={() => handleChangeCurrentPage(currentPage - 2)}
          className="leading-none aspect-square w-9 flex justify-center items-center bg-transparent text-base rounded-full text-[#0F0F0F]"
        >
          <span>{currentPage - 2}</span>
        </button>
      ) : (
        ""
      )}
      {currentPage > 1 ? (
        <button
          onClick={() => handleChangeCurrentPage(currentPage - 1)}
          className="leading-none aspect-square w-9 flex justify-center items-center bg-transparent text-base rounded-full text-[#0F0F0F]"
        >
          <span>{currentPage - 1}</span>
        </button>
      ) : (
        ""
      )}
      <button
        disabled
        className="leading-none active aspect-square w-9 flex justify-center items-center bg-transparent text-base rounded-full text-[#0F0F0F]"
      >
        <span>{currentPage}</span>
      </button>
      {currentPage < totalPages ? (
        <button
          onClick={() => handleChangeCurrentPage(currentPage + 1)}
          className="leading-none aspect-square w-9 flex justify-center items-center bg-transparent text-base rounded-full text-[#0F0F0F]"
        >
          <span>{currentPage + 1}</span>
        </button>
      ) : (
        ""
      )}
      {currentPage <= totalPages - 2 ? (
        <button
          onClick={() => handleChangeCurrentPage(currentPage + 2)}
          className="leading-none aspect-square w-9 flex justify-center items-center bg-transparent text-base rounded-full text-[#0F0F0F]"
        >
          <span>{currentPage + 2}</span>
        </button>
      ) : (
        ""
      )}
      <div className="w-full lg:w-fit flex justify-center gap-3">
        <button
          disabled={currentPage >= totalPages}
          onClick={() => handleChangeCurrentPage(currentPage + 1)}
          className="leading-none aspect-square w-9 flex justify-center items-center bg-gray-200 text-base rounded-full text-[#0F0F0F]"
        >
          <FaAngleRight />
        </button>
        {currentPage <= totalPages - 3 ? (
          <button
            onClick={() => handleChangeCurrentPage(totalPages)}
            className="leading-none aspect-square w-9 flex justify-center items-center bg-gray-200 text-base rounded-full text-[#0F0F0F]"
          >
            <FaAnglesRight />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
