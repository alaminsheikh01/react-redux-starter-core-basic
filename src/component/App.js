import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const loggedin = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>I'm from app component= {counter}</h1>
      {loggedin ? <p>Hello everyone</p> : ""}
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
