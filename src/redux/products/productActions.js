import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/products";

const getAllProducts = createAsyncThunk("products/all",async(_,{rejectWithValue})=>{
    try{
  const response = await getProducts({limit:20});
  return response.data; 
    }catch(error){
    return rejectwithValue(error.response?.data)
    }
})
export {getAllProducts}