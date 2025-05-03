import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

// 🎨 Tema customizado
const theme = createTheme({
  primaryColor: 'violet', // ou 'dark', 'gray', 'blue', etc.
  colors: {
    dark: [
      '#d9d9d9', '#bfbfbf', '#a6a6a6', '#8c8c8c', '#737373',
      '#595959', '#404040', '#262626', '#1a1a1a', '#0d0d0d',
    ],
    furia: [
      '#f2f2f2', '#d9d9d9', '#bfbfbf', '#a6a6a6', '#8c8c8c',
      '#595959', '#404040', '#262626', '#1a1a1a', '#000000', // base FURIA
    ],
  },
  fontFamily: 'Inter, Roboto, sans-serif',
  defaultRadius: 'md',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position="top-right" />
      <App />
    </MantineProvider>
  </React.StrictMode>
);