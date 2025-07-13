import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// No need to import App.css here, we will import it directly in App.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);