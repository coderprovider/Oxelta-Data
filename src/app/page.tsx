// app/page.tsx
"use client";

import React from 'react';
import { Box } from '@mui/material';

const MainPage: React.FC = () => {
  const dataRoomUrl = "/static-site/Data%20room.html";

  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#fff',
      }}
    >
      <iframe
        src={dataRoomUrl}
        title="Data Room"
        frameBorder="0"
        style={{
          height: '100%',
          width: '100%',
          border: 'none',
        }}
        allowFullScreen
      />
    </Box>
  );
};

export default MainPage;
