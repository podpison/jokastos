import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'What I do | Jokastos',
  description: 'This is exactly what Alexey usually does',
}

const WhatIDoPage: FC = () => {
  return <main>
    <Heading text='This is exactly what I do' />
    <Video />
  </main>
};

export default WhatIDoPage;