import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './templates/App/App';
import { AllCryptos } from './templates/AllCryptos/AllCryptos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MyThemeProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/allcryptos" element={<AllCryptos />} />
          </Routes>
        </MyThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
