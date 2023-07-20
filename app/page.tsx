import Divider from '@/ui/Divider';
import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Personal website of Alexey Uvarov | Jokastos',
  description: 'Do you really want to know Alexey Uvarov better? We can provide it to you!',
  keywords: ['Alexey Uvarov', 'Uvarov Alexey', 'Uvarov', 'Alexey Uvarov personal website', 'Alexey Uvarov website', 'personal webisite', 'jokastos Alexey']
}

const MainPage: FC = () => {
  return <main>
    <Heading text='This is the personal website of Uvarov Alexey' />
    <Video />
    <Divider />
    <div className='grid gap-y-4 max-w-[640px] mx-auto'>
      <h2 className='text30-48 text-center'>What to expect here?</h2>
      <p className='text-center md:text-lg'>This website provides essential information about Alexey Uvarov that can help you to get in touch with him or know him a bit better</p>
    </div>
  </main>
};

export default MainPage;