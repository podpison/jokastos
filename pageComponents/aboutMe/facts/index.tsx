import { FC } from 'react';
import Item, { FactType } from './item';

type Props = {
  facts: FactType[]
}

const Facts: FC<Props> = ({ facts }) => {
  let Items = facts.map((i, index) => <Item {...i} key={index} />);

  return <ul className='flex flex-col mx-auto max-w-[800px]'>
    {Items}
  </ul>
};

export default Facts;