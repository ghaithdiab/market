import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider';
import {ThemeProvider} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {theme} from './util/them';
import {Provider} from 'react-redux'
import store from './store';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <App />    
      </ThemeProvider>
      </CacheProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

