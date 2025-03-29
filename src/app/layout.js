// app/layout.js
'use client';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../theme/theme';
import Layout from '../components/layout';

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
