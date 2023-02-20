import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * Steps for using RTK
 * Create a store
 *    using configureStore()
 * Wrap all components with Provider component
 *    provide our store to store prop
 *
 * Create a slice
 *    using createSlice()
 *    name:
 *    initialState:
 *    reducers:
 *    export slice.reducer & export const {actions} = slice.actions
 * Add created slice into the store
 *    const store = configureStore({reducer: {slice: slice}})
 *
 *
 *
 *
 *
 *
 *
 */
