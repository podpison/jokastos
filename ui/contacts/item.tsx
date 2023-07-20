import { FC } from 'react';
import { Tooltip } from '@mui/material';

export type ContactType = {
  name: string
  href: string
  Icon: FC<{ className: string }>
}

type Props = {

} & ContactType

const Item: FC<Props> = ({ name, href, Icon }) => {
  return <Tooltip title={`This is my ${name}`}>
    <li className='group/contact'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <Icon className='text-smoke transition-opacity group-hover/contact:opacity-70' />
      </a>
    </li>
  </Tooltip>
};

export default Item;