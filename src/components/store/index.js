import { createStore } from "redux";
import {createSlice} from '@reduxjs/toolkit'
//! for a reduc we need the following main things
//! 1- store
//! 2- Reducer Function
//! 3- Subscriber component/Function

const initialState ={counter:0, amount:0, showCounter:true}
// using redux toolkit we are calling this which takes an object
// we create sliced of the states for different or unrelated values
// here we just have counter so we will create just one state
createSlice(
{

}
);
//! 2- Reducer Function
const counterReducer = (state=initialState, action)=>{

    
    if(action.type ==='increment'){
        return {
         counter : state.counter + 1,
         amount:state.amount,
         showCounter:state.showCounter
        }
    }
    if(action.type ==='decrement'){
        return {
         counter : state.counter - 1,
         amount:state.amount,
         showCounter:state.showCounter
        }
    }
    if(action.type ==='incrementByFive'){
        return {
         counter : state.counter + action.amount,
         showCounter:state.showCounter
        }
    }
    if(action.type ==='toggle'){
        return {
         showCounter:!state.showCounter,
         counter:state.counter
        }
    }
    return state;
}

//! 1- store
const store = createStore(counterReducer);

export default store;