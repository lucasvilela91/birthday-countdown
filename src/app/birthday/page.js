// app/aniversario/page.js
import React from 'react';
import { Typography, Button } from '@mui/material'; // Usando Material UI

const AniversarioPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Typography
        variant='h3'
        gutterBottom
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}
      >
        Falta pouco para seu 30tão!
      </Typography>
      <Button
        href='/'
        sx={{
          backgroundColor: '#690037',
          color: '#fff',
          padding: '10px 20px',
          minWidth: '200px',
          minHeight: '50px',
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#8A0050' },
          marginTop: '20px',
        }}
      >
        Voltar à Página Inicial
      </Button>
    </div>
  );
};

export default AniversarioPage;
