import IDoThese from '@/pageComponents/whatIDo/IDoThese';
import Divider from '@/ui/Divider';
import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'What Alexey Uvarov does | Jokastos',
  description: 'This is exactly what Alexey Uvarov usually does',
  keywords: ['Alexey Uvarov', 'Uvarov Alexey', 'what Alexey Uvarov does', 'what Uvarov Alexey does', 'what Uvarov does', 'jokastos what I do']
}

const WhatIDoPage: FC = () => {
  return <main>
    <Heading text='This is exactly what I do' />
    <Video />
    <Divider />
    <IDoThese />
  </main>
};

export default WhatIDoPage;