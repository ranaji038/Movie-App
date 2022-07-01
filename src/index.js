import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

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
    console.log("ACTION_TYPE = ", action.type);
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Store", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
