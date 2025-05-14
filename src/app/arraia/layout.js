// app/aniversario/layout.js
'use client';

import { Box } from '@mui/material';

export default function AniversarioLayout({ children }) {
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
          backgroundImage: 'url(/arraia-novo.jpg)', // Imagem específica para o layout de aniversário
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
          zIndex: -1,
        },
      }}
    >
      {children}
    </Box>
  );
}
