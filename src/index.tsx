import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import storeFactory from './redux/store'

import './index.css';

  const reduxStore = storeFactory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



reportWebVitals();