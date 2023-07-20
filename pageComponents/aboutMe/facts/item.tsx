import { FC } from 'react';
import cn from 'classnames';

export type FactType = {
  category: string
  value: string | number | JSX.Element | string[]
}

type Props = {

} & FactType

const Item: FC<Props> = ({ category, value }) => {

  return <li
    className={cn(
      'group relative flex items-center justify-between gap-x-5 border-y border-solid border-secondary p-4 max-sm:flex-col max-sm:gap-y-2 max-sm:text-center',
      'even:border-r even:border-t-0',
      'odd:border-l'
    )}
  >
    <p className='font-bold text-[18px]'>{category}:</p>

    {typeof value === 'object' && !Array.isArray(value)
      ? value //JSX.Element
      : <p>{Array.isArray(value) ? value.join(', ') : value}</p>
    }
    <span
      className={cn(
        'absolute h-5 w-px bg-secondary -bottom-[21px]',
        'group-even:left-0',
        'group-odd:right-0',
        'group-last:hidden'
      )}
    />
  </li>
};

export default Item;