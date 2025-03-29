// components/layout.js
'use client'; // Apenas se precisar de interatividade

import { Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/photo-to-page.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
          zIndex: -1,
        },
      }}
    >
      {children}
    </Box>
  );
}
