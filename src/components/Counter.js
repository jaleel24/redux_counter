import { useSelector,useDispatch } from 'react-redux';
// import { useState } from 'react';
import classes from './Counter.module.css';


//! we have used useSelector and useDispatch hook from redux to make use of the centralized store

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  // const [amount,setAmount] = useState(0);
  const incrementHandler =()=>{
    dispatch({type:'increment'});
  }
  //! over here we are attaching the payload with the dispatch function so that we do not have to manually put the 
  //let amount= 0;
  const incrementbyFive =()=>{
   
    dispatch({type:'incrementByFive', amount:5});
  }
  const decrementHandler =()=>{
    dispatch({type:'decrement'});
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});
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
