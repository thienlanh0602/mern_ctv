import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {persistor,stores} from "./redux/stores"
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={stores}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>   
  </Provider>,
  document.getElementById('root')
);
