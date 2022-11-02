import React from 'react';
import ReactDOM from 'react-dom/client.js';

import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,  // eslint-disable-line prettier/prettier
);
