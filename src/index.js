import React from 'react';
import ReactDOM from 'react-dom/client';
//! 1- to use Redux we need to import Provider from react-redux
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
//! 1- then also import the store that we have created  and pass it as prop to Provider as shown below and wrap the app component with Provider
import store from './components/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
