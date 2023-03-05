import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Chakra
import { ChakraProvider } from '@chakra-ui/react'

// Router
import { BrowserRouter } from 'react-router-dom';

// config redux
import { Provider } from 'react-redux';
import { store } from './Redux/ConfigStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
