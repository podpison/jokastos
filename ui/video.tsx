'use client';
import { Box } from '@mui/material';
import YouTube from 'react-youtube';
import { FC } from 'react';

const Video: FC = () => {
  return <Box className='flex mt-10 sm:mt-16 md:mt-20'>
    <YouTube
      className='mx-auto max-md:w-full'
      videoId='dQw4w9WgXcQ'
      iframeClassName='w-full max-w-[800px] h-[270px] mx-auto smmd:h-[300px] md:w-[700px] md:h-[400px]'
      opts={{
        playerVars: {
          autoplay: 1,
        }
      }}
    />
  </Box>
};

export default Video;