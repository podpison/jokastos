'use client';
import { FC } from 'react';
import Item, { IDoThisType } from './item';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

type Props = {

}

let items: IDoThisType[] = [
  {
    heading: 'Creating',
    description: 'I can create websites using modern technologies like next.js and typescript',
    Icon: BuildIcon
  },
  {
    heading: 'Maintaining',
    description: 'I can maintain your code in good condition and implement new features',
    Icon: SupportAgentIcon
  },
];

const IDoThese: FC<Props> = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <ul className='flex flex-col divide-y divide-secondary divide-solid'>
    {Items}
  </ul>
};

export default IDoThese;