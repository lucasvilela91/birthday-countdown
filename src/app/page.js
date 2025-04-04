// app/page.js
'use client';

import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import MusicPlayer from '../components/musicPlayer';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Ou um fallback de carregamento
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Typography
        variant='h1'
        gutterBottom
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          fontSize: { xs: '2rem', md: '3.25rem' },
        }}
      >
        Não seria Paula se não tivesse contagem regressiva!
      </Typography>

      <Button
        href='/birthday'
        sx={{
          backgroundColor: '#690037',
          color: '#fff',
          padding: '10px 30px',
          minWidth: '200px',
          minHeight: '50px',
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#8A0050' },
          marginTop: '40px',
        }}
      >
        Aniversário
      </Button>

      <Button
        href='/arraia'
        sx={{
          backgroundColor: '#690037',
          color: '#fff',
          padding: '10px 20px',
          minWidth: '200px',
          minHeight: '50px',
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#8A0050' },
          marginTop: '20px',
          marginBottom: '50px',
        }}
      >
        ARRAIÁ
      </Button>

      <MusicPlayer />
    </Box>
  );
}
