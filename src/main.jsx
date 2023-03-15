import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { App } from './templates/App';
import { Provider } from 'react-redux';

import store from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </Provider>
  </React.StrictMode>,
);
