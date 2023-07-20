import { FC } from 'react';
import Item from './item';
import cn from 'classnames';

type Props = {
  pages: string[]
  className?: string
}

const Nav: FC<Props> = ({ pages, className }) => {
  let Items = pages.map((p, index) => <Item page={p} key={index} />);

  return <nav className={cn('', className)}>
    <ul className='justify-center flex-grow gap-x-2 md:flex'>
      {Items}
    </ul>
  </nav>
};

export default Nav;