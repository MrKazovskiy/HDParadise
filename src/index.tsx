import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { store } from './store/store';
// import { Provider } from 'react-redux';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import './styles/_global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('__cinema') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

reportWebVitals();
