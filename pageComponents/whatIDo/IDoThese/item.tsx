import { FC } from 'react';

export type IDoThisType = {
  heading: string
  description: string
  Icon: FC<{ className: string }>
}

type Props = {

} & IDoThisType

const Item: FC<Props> = ({ heading, description, Icon }) => {
  return <li className='flex flex-col text-center gap-y-4 py-6 first:pt-0 last:pb-0'>
    <div className='flex items-center justify-center gap-x-4'>
      <Icon className='text-[35px]' />
      <h2 className='text30-48'>{heading}</h2>
    </div>
    <p className='max-w-[500px] mx-auto md:text-lg'>{description}</p>
  </li>
};

export default Item;