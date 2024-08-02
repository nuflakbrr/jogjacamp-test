import { FC, ReactElement } from 'react'
import { classNames } from '../../../../lib/classNames';

type Props = {
  type: 'primary' | 'secondary';
  label: string;
  icon?: ReactElement
}

const Button: FC<Props> = ({ type, label, icon }) => {
  return (
    <button className={classNames(
      type === 'primary' ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'bg-gray-200 hover:bg-gray-300',
      'font-sans font-semibold text-sm md:text-base py-3 px-5 rounded-lg flex items-center'
    )}>
      {icon} {label}
    </button>
  )
}

export default Button