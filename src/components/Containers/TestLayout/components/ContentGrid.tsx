import { FC } from 'react'

type Props = {
  label: string
}

const ContentGrid: FC<Props> = ({ label }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-transparent border rounded-lg p-5">
      <h1 className="font-sans font-bold">{label}</h1>

      <p className='font-sans font-normal text-base text-gray-500 my-3'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      <span className='font-sans font-semibold text-gray-500 text-sm'>Last updated 5 mins ago</span>
    </div>
  )
}

export default ContentGrid