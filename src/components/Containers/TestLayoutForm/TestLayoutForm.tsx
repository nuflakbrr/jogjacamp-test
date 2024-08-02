import { FC } from 'react'
import { Download, Plus, Upload } from "lucide-react";

import MainLayout from '../../../layouts/MainLayout'
import useScreenSize from '../../../hooks/useScreenSize';
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';

const ContainerTestLayoutForm: FC = () => {
    const screenSize = useScreenSize();

    return (
        <MainLayout typeLayout={`Layout 2 ${screenSize}`}>
            <section className='container mx-auto my-24'>
                <div className='w-full px-4'>
                    <div className="hidden lg:flex items-center justify-between gap-3">
                        <Button label='Tambah' type='primary' icon={<Plus className='mr-2 text-sm' />} />
                        <Button label='Import' type='secondary' icon={<Download className='mr-2 text-sm' />} />
                        <Button label='Export' type='secondary' icon={<Upload className='mr-2 text-sm' />} />
                        <Input />
                        <Select />
                    </div>

                    <div className="hidden md:flex flex-col lg:hidden">
                        <div className="flex items-center justify-between w-full">
                            <Button label='Tambah' type='primary' icon={<Plus className='mr-2 text-sm' />} />

                            <div className="flex items-center gap-4">
                                <Button label='Import' type='secondary' icon={<Download className='mr-2 text-sm' />} />
                                <Button label='Export' type='secondary' icon={<Upload className='mr-2 text-sm' />} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-4 mt-10">
                            <div className="col-span-8">
                                <Input />
                            </div>

                            <div className="col-span-4">
                                <Select />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:hidden">
                        <div className="flex items-center justify-between">
                            <Button label='Tambah' type='primary' icon={<Plus className='mr-2 text-sm' />} />
                            <Button label='Import' type='secondary' icon={<Download className='mr-2 text-sm' />} />
                            <Button label='Export' type='secondary' icon={<Upload className='mr-2 text-sm' />} />
                        </div>

                        <div className="flex flex-col mt-10 gap-5">
                            <Input />
                            <Select />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ContainerTestLayoutForm