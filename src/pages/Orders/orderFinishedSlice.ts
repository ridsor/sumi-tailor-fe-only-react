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

export const getOrdersFinished = createAsyncThunk(
  "ordersFinished/getOrdersFinished",
  async ({
    currentPage = 1,
    totalItems = 10,
  }: {
    currentPage?: number;
    totalItems?: number;
  }) => {
    const res = await axios.get(
      backendURL +
        `/api/orders-finished?_sort=id&_order=desc&_page=${currentPage}&_limit=${totalItems}`
    );

    const result: { data: Order[] } & Paginate = {
      data: res.data,
      totalItems: totalItems as number,
      totalPages: 6,
      currentPage: currentPage as number,
    };

    return result;
  }
);

const orderFinishedEntity = createEntityAdapter<Order>({
  selectId: (order) => order.id,
});

export const orderFinishedSlice = createSlice({
  name: "orderFinished",
  initialState: orderFinishedEntity.getInitialState<Paginate>({
    totalItems: 10,
    totalPages: 1,
    currentPage: 1,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getOrdersFinished.fulfilled,
      (state, action: PayloadAction<{ data: Order[] } & Paginate>) => {
        orderFinishedEntity.setAll(state, action.payload.data);
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      }
    );
  },
});

export const orderFinishedSelectors =
  orderFinishedEntity.getSelectors<RootState>((state) => state.orderFinished);
export default orderFinishedSlice.reducer;
