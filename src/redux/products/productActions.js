import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductsByCategories } from "../../api/products";

const getAllProducts = createAsyncThunk("products/all",async(query,{rejectWithValue})=>{
    try{
      console.log(query);
  const response = await getProducts(query||{});
  return response.data; 
    }catch(error){
    return rejectWithValue(error.response?.data)
    }
})
const getAllProductsByCategories = createAsyncThunk("products/categories",async(_,{rejectWithValue})=>{
  try{
    
const response = await getProductsByCategories();
return response.data; 
  }catch(error){
  return rejectWithValue(error.response?.data)
  }
})
export {getAllProducts,getAllProductsByCategories}