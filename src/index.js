import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { reducer } from "./reducer";
import ScrollToTop from "./helper/scrolltoTop";
const rootElement = document.getElementById("root");
const persistConfig = {
  key: "persistedState",
  storage
};
const persistReducerObject = persistReducer(persistConfig, reducer);
const store = createStore(persistReducerObject);
const persistStoreObject = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStoreObject}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </PersistGate>
  </Provider>,
  rootElement
);
