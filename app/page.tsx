import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Personal website of Alexey Uvarov | Jokastos',
  description: 'This is the personal website of Uvarov Alexey where you can find everything you need about him. If you don\'t, you can get in touch with him',
  keywords: ['Alexey Uvarov', 'Uvarov', 'Alexey Uvarov personal website', 'personal webisite']
}

const MainPage: FC = () => {
  return <main>
    <meta name="google-site-verification" content="2bco0LV7y4a5e4a_swVe81p-di_E3EGC49h3OvMjp0I" />
    <Heading text='This is the personal website of Uvarov Alexey' />
    <Video />
  </main>
};

export default MainPage;