import { applyMiddleware, createStore } from "redux";
import rootReducers from "./rootReucer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga";

let sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  // applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;