import { FC } from 'react'

import MainLayout from '../../../layouts/MainLayout'
import useScreenSize from '../../../hooks/useScreenSize';
import ContentGrid from './components/ContentGrid';
import CarouselSection from './components/Carrousel';

const ContainerTestLayout: FC = () => {
    const screenSize = useScreenSize();

    return (
        <MainLayout typeLayout={`Layout 1 ${screenSize}`}>
            <section className='container mx-auto my-24'>
                <div className='w-full px-4'>
                    <CarouselSection />
                    <div className="grid grid-cols-12 gap-4">
                        <ContentGrid label='Frontend' />
                        <ContentGrid label='Mockup' />
                        <ContentGrid label='Design' />
                        <ContentGrid label='Test' />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ContainerTestLayout