import React from 'react';
import Layout from '../app/layout'; // Verifique se o caminho está correto
import { Box, Typography } from '@mui/material'; // Importando o Box e Typography do MUI

const Page = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // Vai garantir que o conteúdo fique centralizado na tela
          textAlign: 'center', // Garante que o texto também esteja centralizado
        }}
      >
        <Typography variant='h3' component='h1' gutterBottom>
          Feliz Aniversário Paula!
        </Typography>
        <Typography variant='h6' component='p'>
          Bem-vindo à contagem regressiva para o grande dia!
        </Typography>
      </Box>
    </Layout>
  );
};

export default Page;
