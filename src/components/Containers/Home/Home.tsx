import { FC } from 'react'

import MainLayout from '../../../layouts/MainLayout';

const ContainerHome: FC = () => {
  return (
    <MainLayout typeLayout=''>
      <section className="container mx-auto my-24">
        <div className="w-full px-4 mt-40">
          <div className="flex flex-col items-center justify-center text-2xl">
            <h1 className="font-sans font-bold">Welcome to Frontend Test JogjaCamp (IDwebhost)</h1>
            <h3 className="font-sans font-bold">Author: <a href="https://github.com/nuflakbrr" target="_blank" rel="noreferrer" className="font-medium text-blue-500 underline">Naufal Akbar Nugroho</a></h3>
          </div>
        </div>

        <div className="w-full px-4 mt-20">
          <h2 className='font-sans text-2xl font-bold'>Getting Started</h2>

          <ol type='1' className='flex flex-col gap-5 px-4 mt-5 list-decimal'>
            <li>
              Install Depedencies on this Project.
              <pre className='px-4 py-2 mt-3 bg-gray-100 rounded-lg'>
                npm install <br />
                # or <br />
                yarn install <br />
                # or <br />
                pnpm install
              </pre>
            </li>
            
            <li>
              Copy environment for this project if doesn't exist.
              <pre className='px-4 py-2 mt-3 bg-gray-100 rounded-lg'>
                cp .env.example .env
              </pre>
            </li>
            
            <li>
              Start development server.
              <pre className='px-4 py-2 mt-3 bg-gray-100 rounded-lg'>
                npm start <br />
                # or <br />
                yarn start <br />
                # or <br />
                pnpm start
              </pre>
            </li>
            
            <li>
              Open <span className='text-blue-500 underline'>http://localhost:3000</span> on your browser and see the result.
            </li>
          </ol>
        </div>
      </section>
    </MainLayout>
  )
}

export default ContainerHome