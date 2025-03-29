// app/aniversario/page.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import CountdownTimer from '../../components/countdownTimer'; // Certifique-se do caminho correto

const AniversarioPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography
        variant='h4'
        gutterBottom
        sx={{
          color: 'black',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          marginBottom: '198px',
        }}
      >
        Falta pouco para viver um típico São João baiano!
      </Typography>

      <CountdownTimer targetDate='2025-06-21T16:00:00' title='Arraiá 30tão' />

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
          marginTop: '265px',
        }}
      >
        Voltar à Página Inicial
      </Button>
    </div>
  );
};

export default AniversarioPage;
