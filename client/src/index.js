import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {Provider} from "react-redux";
import {persistor,stores} from "./redux/stores"
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <Provider store={stores}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>   
  </Provider>
);
