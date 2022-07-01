import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// console.log("Before State", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Sasta Superman" }],
// });

// console.log("After State", store.getState());

//function logger(obj, next , action)
// looger(ob)(next)(action)

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //miidleware Code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //loogger code
    if (typeof action !== "function") {
      console.log("ACTION_TYPE = ", action.type);
    }
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //logger code
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("Store", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
