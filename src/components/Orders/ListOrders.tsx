import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Order from "./Order";
import Pagination from "../Pagination";
import {
  getOrdersFinished,
  orderFinishedSelectors,
} from "../../pages/Orders/orderFinishedSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

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

  var sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };

  const handleChangeCurrentPageOrderFinished = (page: number) =>
    dispatch(
      getOrdersFinished({
        currentPage: page,
        totalItems: totalItemsdOrderFinished,
      })
    );

  useEffect(() => {
    dispatch(
      getOrdersFinished({
        totalItems: 5,
        currentPage: currentPageOrderFinished,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    // Slick
    const dots = document.querySelectorAll(".slick-dots>li>button");
    dots[0].innerHTML = "Diproses";
    dots[0].setAttribute("tabindex", "1");
    dots[1].innerHTML = "Selesai";
    dots[1].setAttribute("tabindex", "2");
  });

  return (
    <Slider {...sliderSettings}>
      <div className="orders unfinished !flex flex-col gap-2 w-full pb-10 p-1">
        <Order
          timestamp={1674716715000}
          name="Ulan"
          category="Baju"
          price={20000}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              ut, rem quod, deserunt provident ipsam expedita velit accusamus
              natus officia excepturi quasi culpa et eius ratione illo sunt,
              necessitatibus porro!"
          finished={0}
        />
        {/* <Pagination /> */}
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
              finished={1}
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
