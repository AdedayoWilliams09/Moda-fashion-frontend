import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import App from './App.jsx';
import './index.css';

// This is where our application starts
// Think of it as the foundation of a house where everything else is built on top

// Create a root element where React will render our app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider gives all components access to our Redux store */}
    <Provider store={store}>
      {/* BrowserRouter enables routing in our app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);