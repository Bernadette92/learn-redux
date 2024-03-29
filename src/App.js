import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter {counter} </h1>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>+</button>
      <button>-</button>
      {isLogged ? <h3>Valueble information i could not see</h3> : ""}
    </div>
  );
}

export default App;
