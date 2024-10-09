 import {createSlice } from '@reduxjs/toolkit'

 const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        increaseCount(state){
          state.count = state.count +1;
        },
        decreaseCount(state){
            state.count = state.count -1;
        },
        increaseByValue(state,action){
         state.count = state.count + action.payload;
        },
    },
})
export const {increaseCount,decreaseCount,increaseByValue}=counterSlice.actions;
export default counterSlice.reducer;