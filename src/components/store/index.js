//import { createStore } from "redux";

import {configureStore,createSlice} from '@reduxjs/toolkit'
//! for a reduc we need the following main things
//! 1- store
//! 2- Reducer Function
//! 3- Subscriber component/Function

const initialState ={counter:0, amount:0, showCounter:true}

// step 2 ====================================================================
// using redux toolkit we are calling this which takes an object
// we create sliced of the states for different or unrelated values
// here we just have counter so we will create just one state
// which will have three arguments 
// 1- name
// 2- inititlaState
// 3- reducers
//! all reducer functions will receive a current state by default and now we do not have to write the if checks
//! functions will be called itself accoding to the function call as shown below
//! by using the redux toolkit we can simply change the existing object as the rest will be taken care by the tool kit and we 
//! do not have to manually add the code as we are doing it from 42-67 in form of if checks 
//=====================================================================
const counterSlice = createSlice(
{
    name:'counter',
    initialState:initialState,
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
//! 2- Reducer Function
// const counterReducer = (state=initialState, action)=>{

//     // when simply using redux make sure that u dont accidently change the current state
//     // reducer function always return a new object, do not modify the existing state  //! go to line 20
//     if(action.type ==='increment'){
//         return {
//          counter : state.counter + 1,
//          amount:state.amount,
//          showCounter:state.showCounter
//         }
//     }
//     if(action.type ==='decrement'){
//         return {
//          counter : state.counter - 1,
//          amount:state.amount,
//          showCounter:state.showCounter
//         }
//     }
//     if(action.type ==='incrementByFive'){
//         return {
//          counter : state.counter + action.amount,
//          showCounter:state.showCounter
//         }
//     }
//     if(action.type ==='toggle'){
//         return {
//          showCounter:!state.showCounter,
//          counter:state.counter
//         }
//     }
//     return state;
// }

//! 1- store 
//const store = createStore(counterReducer);


//==========================================================
// Step 1- configure a store 
//! how to use the slice simply import the configureStore from redux toolkit and create as many slices on the go
//! consfigure store recieves an object as an argumnent which will be the reducer
//! if we have one slice then we will do as shown below
//==========================================================
const store = configureStore({
    reducer: counterSlice.reducer
});

//? if we have more slices then simply do const store = configureStore({
 //?   reducer: {counter:counterSlice.reducer, otherdummyname:otherSlice}
//?});

//==========================================================
// Step 3- how to dispatch actions , toolkit gives us dispatch action facility easy by simply
// simpy create a constant and assign it  the sliceName.action plus also export the const as show below in line 101

export const counterActions = counterSlice.actions;
export default store;