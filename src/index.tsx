import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Application } from './components/application';
import ItemProvide from './context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemProvide>
      <Application />
    </ItemProvide>
  </React.StrictMode>
);
