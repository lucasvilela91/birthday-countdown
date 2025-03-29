// app/aniversario/page.js
import React from 'react';
import { Typography, Button } from '@mui/material'; // Usando Material UI

const AniversarioPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant='h3' gutterBottom>
        Falta pouco para seu 30tão!
      </Typography>
      <Button variant='contained' color='secondary' href='/'>
        Voltar à Página Inicial
      </Button>
    </div>
  );
};

export default AniversarioPage;
