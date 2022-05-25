import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// const MyComponent = lazy(() => import("./components/App"));
ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter basename="/">
    <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

