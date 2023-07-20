import Divider from '@/ui/Divider';
import Facts from '@/pageComponents/aboutMe/facts';
import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'About Alexey Uvarov | Jokastos',
  description: 'A detailed description of the life of Alexey Uvarov',
  keywords: ['Alexey Uvarov', 'Uvarov Alexey', 'Uvarov', 'who is Alexey Uvarov', 'Alexey Uvarov biography', 'jokastos biography'],
}

const WhatIDoPage: FC = () => {
  return <main>
    <Heading text='This is exactly who I am' />
    <Video />
    <Divider />
    <Facts />
  </main>
};

export default WhatIDoPage;