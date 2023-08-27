import {
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;

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

interface Paginate {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export const getOrdersUnfinished = createAsyncThunk(
  "ordersUnfinished/getOrdersUnfinished",
  async ({
    currentPage = 1,
    totalItems = 10,
  }: {
    currentPage?: number;
    totalItems?: number;
  }) => {
    const res = await axios.get(
      backendURL +
        `/api/orders?finished=0&_sort=id&_order=desc&_page=${currentPage}&_limit=${totalItems}`
    );

    const result: { data: Order[] } & Paginate = {
      data: res.data,
      totalItems: totalItems as number,
      totalPages: 2,
      currentPage: currentPage as number,
    };

    return result;
  }
);

const orderUnfinishedEntity = createEntityAdapter<Order>({
  selectId: (order) => order.id,
});

export const orderUnfinishedSlice = createSlice({
  name: "orderFinished",
  initialState: orderUnfinishedEntity.getInitialState<Paginate>({
    totalItems: 10,
    totalPages: 1,
    currentPage: 1,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getOrdersUnfinished.fulfilled,
      (state, action: PayloadAction<{ data: Order[] } & Paginate>) => {
        orderUnfinishedEntity.setAll(state, action.payload.data);
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      }
    );
  },
});

export const orderUnfinishedSelectors =
  orderUnfinishedEntity.getSelectors<RootState>(
    (state) => state.orderUnfinished
  );
export default orderUnfinishedSlice.reducer;
