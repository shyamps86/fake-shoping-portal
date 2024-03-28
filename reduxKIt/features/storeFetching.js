import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
//import Api from './apiFlder/api' 

export const dispatchApi= createAsyncThunk("fetchiStoreApi",async ()=>{
    const response= await fetch("https://fakestoreapi.com/products");
    return response.json();
})


export const storeFetching =createSlice({
    name:"storeFetching",
    initialState:{
        isLoading:true,
        isError:false,
        data:[]
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(dispatchApi.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=action.payload;
        });
        builder.addCase(dispatchApi.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(dispatchApi.rejected,(state,action)=>{
            state.isError=true;
            console.log("error", action.payload)
        })
    }
})

export default storeFetching.reducer;