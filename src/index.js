import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers";
import { provider } from "redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// //Action
// const increment = () => {
//   return {
//     type: "increment",
//   };
// };
// const decrement = () => {
//   return {
//     type: "decrement",
//   };
// };

// //Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// // display in console
// store.subscribe(() => console.log(store.getState()));

// // Dispach action
// store.dispatch(increment());

ReactDOM.render(
  <provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
