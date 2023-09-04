import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-supabase';
import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(
  'https://tnfkxcpsbkknktflvwws.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuZmt4Y3BzYmtrbmt0Zmx2d3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTUzMDUsImV4cCI6MjAwOTE3MTMwNX0.osd1nN7S1YtaoVphGCFnKGhW91eVHGBN_g14RX2Rjkg'
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider value={supabaseClient}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
