import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./ProductsSlice"
import { cartSlice, selectedNumberOfItems } from "./CartSlice";
export  const store=configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
    }
})
