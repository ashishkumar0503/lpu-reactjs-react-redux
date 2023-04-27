import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Store from './redux/store/Store';
import { Provider } from 'react-redux';

Store.subscribe(() => console.log(Store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store} >
      <App />
    </Provider>
  </React.StrictMode>
);

