import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dogs from './pages/Dogs';
import 'flowbite';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dogs />
  </React.StrictMode>
);
