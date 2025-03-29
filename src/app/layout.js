// app/layout.js
import { CssBaseline } from '@mui/material';
import './globals.css';

export const metadata = {
  title: 'Contagem Regressiva',
  description: 'Site de contagem regressiva para eventos',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CssBaseline />
        <div className='background'>
          <div className='content'>{children}</div>
        </div>
      </body>
    </html>
  );
}
