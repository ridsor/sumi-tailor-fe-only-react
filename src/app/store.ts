import { configureStore } from "@reduxjs/toolkit";
import orderFinishedReducer from "../pages/Orders/orderFinishedSlice";
import orderUnfinishedReducer from "../pages/Orders/orderUnfinishedSlice";

const store = configureStore({
  reducer: {
    orderFinished: orderFinishedReducer,
    orderUnfinished: orderUnfinishedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
