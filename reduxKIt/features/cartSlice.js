import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:"cartSlice",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
            return state.filter((value)=>value.id !== action.payload)
        },
    }
})

export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer