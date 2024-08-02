import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

const ToasterProvider: FC = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        duration: 2000,
      }}
    />
  )
}

export default ToasterProvider