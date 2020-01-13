import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers/root";
import { rootEpic } from "../epics";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);
  window.store = store;
  return store;
}
