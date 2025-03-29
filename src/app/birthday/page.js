// app/aniversario/page.js
import React from 'react';
import { Typography, Button } from '@mui/material'; // Usando Material UI

const AniversarioPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant='h2' gutterBottom>
        Feliz Aniversário, Paula!
      </Typography>
      <Typography variant='h4' paragraph>
        Parabéns pelos seus 30 anos! Que este ano seja incrível!
      </Typography>
      <Button variant='contained' color='secondary' href='/'>
        Voltar à Página Inicial
      </Button>
    </div>
  );
};

export default AniversarioPage;
