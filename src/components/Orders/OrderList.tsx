import { useCallback, useEffect, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Order from "./OrderItem";
import Pagination from "../Pagination/Pagination";
import {
  getOrdersFinished,
  orderFinishedSelectors,
} from "../../pages/Orders/orderFinishedSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getOrdersUnfinished,
  orderUnfinishedSelectors,
} from "../../pages/Orders/orderUnfinishedSlice";

interface Order {
  id: number;
  item_code: number;
  name: string;
  category: string;
  price: number | null;
  description: string | null;
  finished: number;
  created_at: string | number;
  updated_at: string | number;
}

export default () => {
  const dispatch = useAppDispatch();

  const ordersFinished = useAppSelector<Order[]>(
    orderFinishedSelectors.selectAll
  );
  const ordersUnfinished = useAppSelector<Order[]>(
    orderUnfinishedSelectors.selectAll
  );

  // Paginate
  const totalItemsdOrderFinished = useAppSelector<number>(
    (state) => state.orderFinished.totalItems
  );
  const totalPagesdOrderFinished = useAppSelector<number>(
    (state) => state.orderFinished.totalPages
  );
  const currentPageOrderFinished = useAppSelector<number>(
    (state) => state.orderFinished.currentPage
  );
  const totalItemsdOrderUnfinished = useAppSelector<number>(
    (state) => state.orderUnfinished.totalItems
  );
  const totalPagesdOrderUnfinished = useAppSelector<number>(
    (state) => state.orderUnfinished.totalPages
  );
  const currentPageOrderUnfinished = useAppSelector<number>(
    (state) => state.orderUnfinished.currentPage
  );

  var sliderSettings = useMemo(
    () => ({
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
    }),
    []
  );

  const handleChangeCurrentPageOrderFinished = useCallback(
    (page: number) =>
      dispatch(
        getOrdersFinished({
          currentPage: page,
          totalItems: totalItemsdOrderFinished,
        })
      ),
    []
  );

  const handleChangeCurrentPageOrderUnfinished = useCallback(
    (page: number) =>
      dispatch(
        getOrdersUnfinished({
          currentPage: page,
          totalItems: totalItemsdOrderUnfinished,
        })
      ),
    []
  );

  useEffect(() => {
    dispatch(
      getOrdersFinished({
        currentPage: currentPageOrderFinished,
      })
    );
    dispatch(
      getOrdersUnfinished({
        currentPage: currentPageOrderUnfinished,
      })
    );
  }, [dispatch, getOrdersFinished, getOrdersUnfinished]);

  useEffect(() => {
    // Slick
    const dots = document.querySelectorAll(".slick-dots>li>button");
    dots[0].innerHTML = "Diproses";
    dots[0].setAttribute("tabindex", "2");
    dots[1].innerHTML = "Selesai";
    dots[1].setAttribute("tabindex", "3");
  });

  return (
    <Slider {...sliderSettings}>
      <div className="orders unfinished !flex flex-col gap-2 w-full pb-10 p-1">
        {ordersUnfinished.length > 0 ? (
          <Pagination
            totalPages={totalPagesdOrderUnfinished}
            currentPage={currentPageOrderUnfinished}
            handleChangeCurrentPage={handleChangeCurrentPageOrderUnfinished}
          />
        ) : (
          ""
        )}
        {ordersUnfinished.length > 0 ? (
          ordersUnfinished.map((order) => (
            <Order
              key={order.id}
              timestamp={order.updated_at}
              name={order.name}
              category={order.category}
              price={order.price}
              description={order.description}
              finished={order.finished}
            />
          ))
        ) : (
          <>Data Pesanan tidak ditemukan</>
        )}
        {ordersUnfinished.length > 0 ? (
          <Pagination
            totalPages={totalPagesdOrderUnfinished}
            currentPage={currentPageOrderUnfinished}
            handleChangeCurrentPage={handleChangeCurrentPageOrderUnfinished}
          />
        ) : (
          ""
        )}
      </div>
      <div className="orders finished !flex flex-col gap-2 pb-10 w-full p-1">
        {ordersFinished.length > 0 ? (
          <Pagination
            totalPages={totalPagesdOrderFinished}
            currentPage={currentPageOrderFinished}
            handleChangeCurrentPage={handleChangeCurrentPageOrderFinished}
          />
        ) : (
          ""
        )}
        {ordersFinished.length > 0 ? (
          ordersFinished.map((order) => (
            <Order
              key={order.id}
              timestamp={order.updated_at}
              name={order.name}
              category={order.category}
              price={order.price}
              description={order.description}
              finished={order.finished}
            />
          ))
        ) : (
          <>Data Pesanan tidak ditemukan</>
        )}
        {ordersFinished.length > 0 ? (
          <Pagination
            totalPages={totalPagesdOrderFinished}
            currentPage={currentPageOrderFinished}
            handleChangeCurrentPage={handleChangeCurrentPageOrderFinished}
          />
        ) : (
          ""
        )}
      </div>
    </Slider>
  );
};
