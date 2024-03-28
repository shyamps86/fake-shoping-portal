import {configureStore} from '@reduxjs/toolkit'
import StoreFetchingReducer from './features/storeFetching'
import cartSliceReducer from './features/cartSlice'
import productSliceReducer from './features/productSlice'
 export const store=configureStore({
    reducer:{
        fetchingApi:StoreFetchingReducer,
        cart:cartSliceReducer,
        productId:productSliceReducer,
    }
})