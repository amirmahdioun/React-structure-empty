import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {AppRoute} from "./route/App.route";

ReactDOM.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
