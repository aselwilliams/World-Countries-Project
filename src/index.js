import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalProvider } from './context-api/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <GlobalProvider>
    <App />
</GlobalProvider>
);

