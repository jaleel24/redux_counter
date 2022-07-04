import { useSelector,useDispatch } from 'react-redux';
// import { useState } from 'react';
import {counterActions} from './store/index';
import classes from './Counter.module.css';


//! we have used useSelector and useDispatch hook from redux to make use of the centralized store

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  // const [amount,setAmount] = useState(0);
  const incrementHandler =()=>{
    dispatch(counterActions.increment())
  }
  //! over here we are attaching the payload with the dispatch function so that we do not have to manually put the 
  //let amount= 0;
  const incrementbyFive =()=>{
    //! with redux toolkit we do
    dispatch(counterActions.increase(5)) //? toolkit will create action type and payload which is a default value over here it will be 10
    // with redux we do
    // dispatch({type:'incrementByFive', amount:5});
  }
  const decrementHandler =()=>{
   dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
      //! with redux toolkit we do
      dispatch(counterActions.toggleCounter())
     // with redux we do
    //dispatch({type:'toggle'});
  };

  return (
    <main className={classes.counter}>
     
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={incrementbyFive}>increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
