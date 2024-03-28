import  {createSlice} from "@reduxjs/toolkit"

export const productSlice= createSlice({
    name:"product-name",
    initialState:{
       id:0,
    },
    reducers:{
        displayProduct:(state,action)=>{
            state.id=action.payload;
        }
    }
})

export const {displayProduct}= productSlice.actions;

export default productSlice.reducer;