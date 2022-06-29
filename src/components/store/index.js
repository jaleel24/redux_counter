import { createStore } from "redux";
//! for a reduc we need the following main things
//! 1- store
//! 2- Reducer Function
//! 3- Subscriber component/Function


//! 2- Reducer Function
const counterReducer = (state={counter:0}, action)=>{
    
    if(action.type ==='increment'){
        return {
         counter : state.counter + 1,
        }
    }
    if(action.type ==='decrement'){
        return {
         counter : state.counter - 1,
        }
    }
    if(action.type ==='incrementByFive'){
        return {
         counter : state.counter + action.amount,
        }
    }
    return state;
}

//! 1- store
const store = createStore(counterReducer);

export default store;