import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.output.css';

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>,
  

   
);