import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.output.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
<GoogleOAuthProvider clientId="463653089707-8p48kpc82eg0042v0gsh80bkfsv4m7uj.apps.googleusercontent.com">
    <Router>
    <App />
    </Router>
    </GoogleOAuthProvider>
    </Provider>,
  

   
);