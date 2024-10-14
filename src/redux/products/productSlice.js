import {createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getAllProductsByCategories } from './productActions';
const productSlice = createSlice({
    name:"product",
    initialState:{
        loading:false,
        error:null,
        products:[],
        query:{},
        categories: [],
    },
    reducers:{
        setLimit:(state,action)=>{
            state.query.limit = action.payload;
        },
        setSort:(state,action)=>{
            state.query.sort=action.payload
        },
        setFilters:(state,action)=>{
            state.query.filters={...state.query.filters, ...action.payload}
        }
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
            })
            .addCase(getAllProductsByCategories.pending,(state,action)=>{
                state.loading= true;
                state.error=null;
            })
            .addCase(getAllProductsByCategories.fulfilled,(state,action)=>{
                state.loading=false;
                state.categories=action.payload;
            })
            .addCase(getAllProductsByCategories.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            });

    }
})
export const {setLimit,setSort,setFilters}=productSlice.actions;
export default productSlice.reducer;