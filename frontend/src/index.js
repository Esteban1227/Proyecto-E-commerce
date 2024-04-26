import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoginAndLogOutProvider } from './context/loginAndLogout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginAndLogOutProvider>
      <App />
    </LoginAndLogOutProvider>
  </React.StrictMode>
);
