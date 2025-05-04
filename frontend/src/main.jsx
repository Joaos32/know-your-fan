import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

// 🎨 Tema customizado
const theme = createTheme({
  primaryColor: 'violet',
  colors: {
    dark: [
      '#d9d9d9', '#bfbfbf', '#a6a6a6', '#8c8c8c', '#737373',
      '#595959', '#404040', '#262626', '#1a1a1a', '#0d0d0d',
    ],
    furia: [
      '#f2f2f2', '#d9d9d9', '#bfbfbf', '#a6a6a6', '#8c8c8c',
      '#595959', '#404040', '#262626', '#1a1a1a', '#000000',
    ],
  },
  fontFamily: 'Inter, Roboto, sans-serif',
  defaultRadius: 'md',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS defaultColorScheme="dark">
      <Notifications position="top-right" />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
