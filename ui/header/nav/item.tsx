import textToURL from '@/helpers/textToURL';
import { Button } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  page: string
}

const Item: FC<Props> = ({ page }) => {
  return <li>
    <Link href={`/${textToURL(page)}`}>
      <Button className='text-smoke'>{page}</Button>
    </Link>
  </li>
};

export default Item;