import { FC } from 'react';
import { Divider as MUIDivider } from '@mui/material';

type Props = {

}

const Divider: FC<Props> = () => {
  return <MUIDivider className='border-smoke my-10 sm:my-14' />
};

export default Divider;