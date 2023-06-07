import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.output.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

const helmetContext = {};
createRoot(document.getElementById('root')).render(

  <HelmetProvider context={helmetContext}>
<GoogleOAuthProvider clientId="463653089707-knhj5ovu0jkdetb0a10h7r9c2rcjl2l7.apps.googleusercontent.com">
<Provider store={store}>
    <Router>
   
      <App />
    
 
    </Router>
    </Provider>
    </GoogleOAuthProvider>
   
  

   </HelmetProvider>
);