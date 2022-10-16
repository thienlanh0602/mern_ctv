import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import Test from '././test/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test/>
  </React.StrictMode>
);
=======
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
>>>>>>> 5fcbcaac747c24fd09cd1a60a72a8f68d0b17a2b
