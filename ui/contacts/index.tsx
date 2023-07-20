import { FC } from 'react';
import { Box } from '@mui/material';
import Item, { ContactType } from './item';
import TelegramIcon from '@mui/icons-material/Telegram';
import cn from 'classnames';
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {
  className?: string
}

const items: ContactType[] = [
  {
    name: 'telegram',
    href: 'https://t.me/podpisonn',
    Icon: TelegramIcon
  },
  {
    name: 'github',
    href: 'https://github.com/podpison',
    Icon: GitHubIcon
  },
];

const Contacts: FC<Props> = ({ className }) => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <Box className={cn('flex gap-x-3', className)} component='ul'>
    {Items}
  </Box>
};

export default Contacts;