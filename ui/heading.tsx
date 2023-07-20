import { FC } from 'react';

type Props = {
  text: string
}

const Heading: FC<Props> = ({ text }) => {
  let splitedText = text.split(' ');

  return <h1 className='text36-60 font-bold text-center mt-10'>
    {splitedText.slice(0, 3).join(' ')}
    <span className='text-greenish'> {splitedText[3]} </span>
    {splitedText.slice(4).join(' ')}
  </h1>
};

export default Heading;