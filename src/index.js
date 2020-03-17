import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import panVerificationReducer from "./containers/credit-line/pan-details/Reducer";
import { BrowserRouter as Router } from "react-router-dom";

// const rootReducer = combineReducers({
//     panVerificationReducer:panVerificationReducer
// })
console.log(panVerificationReducer, "panVerificationReducer");
const store = createStore(
  panVerificationReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
