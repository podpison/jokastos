import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Jokastos',
  description: 'The personal website for Alexey Uvarov',
}

const MainPage: FC = () => {
  return <main>
    <Heading text='This is my personal website' />
    <Video />
  </main>
};

export default MainPage;