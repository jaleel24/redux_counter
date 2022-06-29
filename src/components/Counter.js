import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';


//! we have used useSelector and useDispatch hook from redux to make use of the centralized store

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  
  const incrementHandler =()=>{
    dispatch({type:'increment'});
  }
  //! over here we are attaching the payload with the dispatch function so that we do not have to manually put the 
  const incrementbyFive =()=>{
    dispatch({type:'incrementByFive', amount:5});
  }
  const decrementHandler =()=>{
    dispatch({type:'decrement'});
  }
  const toggleCounterHandler = () => {

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
