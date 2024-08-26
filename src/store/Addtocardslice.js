import { createSlice } from "@reduxjs/toolkit";
const initialState={
    AddtoCardDate:[]
    }

const AddtoCard=createSlice({
    name:'Addtocard',
    initialState:initialState,
    reducers:{
        StoreData:(state,action)=>{
            const item = action.payload;
            console.log('action.payload-->',action.payload)
            const itemIndex = state.AddtoCardDate.findIndex(existingItem => existingItem.id === item.id);

            if (itemIndex === -1) {
             
                state.AddtoCardDate.push(item);
            } else {
            
                console.log('', item);
            }

        }
    }

})

export const {StoreData}=AddtoCard.actions
export  default AddtoCard.reducer
