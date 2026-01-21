import { createSlice } from "@reduxjs/toolkit";


const favouritSlice=createSlice(
    {
        name:"favourit",
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state , action)=>{state.items.unshift(action.payload)},
            removeItem:(state , action)=>{state.items = state.items.filter((item)=>item.id!=action.payload)}
        }
    }
)

export const {addItem , removeItem}=favouritSlice.actions

export default favouritSlice.reducer

