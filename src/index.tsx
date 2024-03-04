import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './plugins/store';
import App from './App';
import './common/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './plugins/i18n';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const outerTheme = createTheme({
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontSize: 14,
    },
});
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={outerTheme}>
                <I18nextProvider i18n={i18n}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </I18nextProvider>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
);
