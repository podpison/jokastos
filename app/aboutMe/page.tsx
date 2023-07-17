import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'About me | Jokastos',
  description: 'A detailed description of the life of Alexey',
}

const WhatIDoPage: FC = () => {
  return <main>
    <Heading text='This is exactly who I am' />
    <Video />
  </main>
};

export default WhatIDoPage;