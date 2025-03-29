'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CountdownTimer = ({ targetDate, title = 'Contagem Regressiva' }) => {
  // Aqui estamos definindo o valor padrão para o título
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Paper
      elevation={3}
      sx={{ padding: 3, textAlign: 'center', maxWidth: 300, margin: 'auto' }}
    >
      <Typography variant='h5' gutterBottom>
        {title} {/* Aqui mostramos o título que foi passado como prop */}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Box>
          <Typography variant='h4'>{timeLeft.days}</Typography>
          <Typography variant='body2'>Dias</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>{timeLeft.hours}</Typography>
          <Typography variant='body2'>Horas</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>{timeLeft.minutes}</Typography>
          <Typography variant='body2'>Minutos</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>{timeLeft.seconds}</Typography>
          <Typography variant='body2'>Segundos</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CountdownTimer;
