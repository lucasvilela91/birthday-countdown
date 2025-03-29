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
          position: 'relative', // Necessário para a sobreposição do fundo
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/photo-to-page.jpg)', // Caminho correto da imagem na pasta public
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4, // Ajuste a opacidade da imagem de fundo
            zIndex: -1, // Coloca a sobreposição atrás do conteúdo
          },
        }}
      >
        <Typography
          variant='h2'
          component='h1'
          gutterBottom
          sx={{
            color: 'black',
            fontWeight: 'bold', // Negrito para mais ênfase
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Sombra no texto para melhorar contraste
            fontSize: '3.25rem', // Aumenta o tamanho da fonte
          }}
        >
          Bem-vindo à Contagem Regressiva!
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
            borderRadius: '8px',
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
            borderRadius: '8px',
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
