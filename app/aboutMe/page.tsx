'use client';
import Divider from '@/ui/Divider';
import Contacts from '@/ui/contacts';
import Facts from '@/pageComponents/aboutMe/facts';
import { FactType } from '@/pageComponents/aboutMe/facts/item';
import Heading from '@/ui/heading';
import Video from '@/ui/video';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'About Alexey Uvarov | Jokastos',
  description: 'A detailed description of the life of Alexey Uvarov',
  keywords: ['Alexey Uvarov', 'Uvarov Alexey', 'Uvarov', 'who is Alexey Uvarov', 'Alexey Uvarov biography', 'jokastos biography'],

}

const currentYear = new Date().getFullYear();

const facts: FactType[] = [
  {
    category: 'Full name',
    value: 'Uvarov Alexey'
  },
  {
    category: 'Specialization',
    value: ['next.js', 'tailwind css', 'typescript', 'docker']
  },
  {
    category: 'Work experience with react.js (not commercial)',
    value: currentYear - 2021 + ' years'
  },
  {
    category: 'Timezone',
    value: 'UTC+5',
  },
  {
    category: 'Current goal',
    value: 'employment'
  },
  {
    category: 'Age',
    value: currentYear - 2005 + ' years'
  },
  {
    category: 'Contacts',
    value: <Contacts />
  },
];

const WhatIDoPage: FC = () => {

  return <main>
    <Heading text='This is exactly who I am' />
    <Video />
    <Divider />
    <Facts facts={facts} />
  </main>
};

export default WhatIDoPage;