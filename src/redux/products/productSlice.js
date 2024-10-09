import {createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from './productActions';
const productSlice = createSlice({
    name:"product",
    initialState:{
        loading:false,
        error:null,
        products:[],
    },
    extraReducers:(builder)=>{
     builder
            .addCase(getAllProducts.pending,(state,action)=>{
                state.loading= true;
                state.error=null;
            })
            .addCase(getAllProducts.fulfilled,(state,action)=>{
                state.loading=false;
                state.products=action.payload;
            })
            .addCase(getAllProducts.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            });

    }
})

export default productSlice.reducer;