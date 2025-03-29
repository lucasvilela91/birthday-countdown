'use client';

import React from 'react';
import Layout from './layout'; // Verifique se o caminho está correto
import { Box, Typography, Button } from '@mui/material'; // Certifique-se de importar o Button do MUI corretamente

const Page = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Alinha os itens no centro horizontalmente
          justifyContent: 'center', // Alinha os itens no centro verticalmente
          height: '100vh', // Garante que o conteúdo fique centralizado na tela
          textAlign: 'center', // Garante que o texto também esteja centralizado
        }}
      >
        <Typography variant='h3' component='h1' gutterBottom>
          Feliz Aniversário Paula!
        </Typography>
        <Typography variant='h6' component='p'>
          Bem-vindo à contagem regressiva para o grande dia!
        </Typography>

        {/* Botão abaixo do texto */}
        <Button
          variant='contained'
          color='primary'
          onClick={() => alert('Botão clicado!')}
          sx={{
            backgroundColor: '#690037', // Cor de fundo personalizada (ex: pink)
            color: '#fff',
            padding: '10px 30px',
            minWidth: '200px', // Largura mínima
            minHeight: '50px', // Cor do texto
            '&:hover': {
              backgroundColor: '#8A0050', // Cor de fundo ao passar o mouse (hover)
            },
            marginTop: '40px',
          }}
        >
          Aniversário
        </Button>

        <Button
          variant='contained'
          color='primary'
          onClick={() => alert('Botão clicado!')}
          sx={{
            backgroundColor: '#690037', // Cor de fundo personalizada (ex: pink)
            color: '#fff',
            padding: '10px 20px',
            minWidth: '200px', // Largura mínima
            minHeight: '50px', // Altura mínima // Cor do texto
            '&:hover': {
              backgroundColor: '#8A0050', // Cor de fundo ao passar o mouse (hover)
            },
            marginTop: '20px',
          }}
        >
          Festa
        </Button>
      </Box>
    </Layout>
  );
};

export default Page;
