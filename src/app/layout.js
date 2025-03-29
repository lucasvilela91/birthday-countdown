import React from 'react';
import { CssBaseline } from '@mui/material';
import './globals.css'; // Verifique se o arquivo global.css está sendo importado corretamente.

const Layout = ({ children }) => {
  return (
    <html lang='pt-BR'>
      <body>
        <CssBaseline />
        <div className='background'>
          <div className='content'>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
