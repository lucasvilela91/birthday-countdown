// components/MusicPlayer.js
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/music/music.mp3'));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log(
          'Autoplay bloqueado. O áudio aguardará a interação do usuário.'
        );
      }
    };

    playAudio();
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audio]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    setProgress((currentTime / duration) * 100);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        backgroundColor: 'background.paper',
        borderRadius: 1,
        maxWidth: 250,
        height: 36, // Altura fixa reduzida
      }}
    >
      <IconButton
        onClick={handlePlayPause}
        size='small'
        sx={{
          padding: '6px',
          '& .MuiSvgIcon-root': {
            fontSize: '1rem', // Tamanho menor para os ícones
          },
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Slider
        value={progress}
        onChange={(e, newValue) =>
          (audio.currentTime = (audio.duration * newValue) / 100)
        }
        size='small'
        sx={{
          width: 150,
          marginLeft: 0.5,
          padding: '4px 0', // Reduz padding vertical do slider
          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
          },
          '& .MuiSlider-track': {
            height: 2,
          },
          '& .MuiSlider-rail': {
            height: 2,
          },
        }}
      />
    </Box>
  );
};

export default MusicPlayer;
