import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';
import logo from '@/public/logo.png';
import cn from 'classnames';

type Props = {
  className: string
} & Omit<LinkProps, 'href'>

const Logo: FC<Props> = ({ className, ...props }) => {
  return <Link className={cn('', className)} {...props} href='/'>
    <Image
      src={logo}
      width={80} height={80}
      alt='Jokastos logo'
    />
  </Link>
};

export default Logo;