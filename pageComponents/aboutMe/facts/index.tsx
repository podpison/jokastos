'use client';
import { FC } from 'react';
import Item, { FactType } from './item';
import Contacts from '@/ui/contacts';

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

const Facts: FC = () => {
  let Items = facts.map((i, index) => <Item {...i} key={index} />);

  return <ul className='flex flex-col mx-auto max-w-[800px]'>
    {Items}
  </ul>
};

export default Facts;