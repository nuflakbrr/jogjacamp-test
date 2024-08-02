import { FC } from 'react'

const Select: FC = () => {
  return (
    <select name='select' id='select' className='w-full px-5 py-3 rounded-lg border shadow-sm' defaultValue='default'>
      <option value="default" disabled>2020</option>
      <option value="1">Pilihan 1</option>
      <option value="2">Pilihan 2</option>
      <option value="3">Pilihan 3</option>
    </select>
  )
}

export default Select