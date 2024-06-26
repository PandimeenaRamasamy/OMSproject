// src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from '../src/store';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <BrowserRouter>
//   <Provider store={store}>
//     <App />
//   </Provider>
// </BrowserRouter>
//  ,
//   document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root for React rendering
const root = createRoot(rootElement);

// Render the application
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
