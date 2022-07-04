import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter:0, showCounter:true}
const counterSlice = createSlice(
    {
        name:'counter',
        initialState:initialCounterState,
        reducers:{
            increment(state){
                state.counter++
            },
            decrement(state){
                state.counter--;
            },
            // if we need a payload there is always an action argument there as well
            increase(state, action){
                state.counter =state.counter + action.payload;
            },
            toggleCounter(state){
                state.showCounter = !state.showCounter;
            }
        }
    }
    );

    export default counterSlice;
    export const counterActions = counterSlice.actions;