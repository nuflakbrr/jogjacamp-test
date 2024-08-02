import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useQuery } from "react-query";
import toast from 'react-hot-toast';

import { Province, Regency, District, Village } from '../../../interfaces';

import MainLayout from '../../../layouts/MainLayout';
import useScreenSize from '../../../hooks/useScreenSize';
import RequestService from '../../../services/RequestService';

import FilterSection from './components/FilterSection';
import LocationContainer from './components/LocationContainer';

const ContainerTestSelect: FC = () => {
    const [provinceData, setProvinceData] = useState<Province[] | null>(null);
    const [provinceId, setProvinceId] = useState<number | null>(null);

    const [regencyData, setRegencyData] = useState<Regency[] | null>(null);
    const [regencyId, setRegencyId] = useState<number | null>(null);

    const [districtData, setDistrictData] = useState<District[] | null>(null);
    const [districtId, setDistrictId] = useState<number | null>(null);

    const [villageData, setVillageData] = useState<Village[] | null>(null);
    const [villageId, setVillageId] = useState<number | null>(null);

    const { refetch: getProvince } = useQuery<Province[], Error>(
        "province",
        async () => {
            return await RequestService.getProvince();
        },
        {
            enabled: false,
            onSuccess: (res) => {
                setProvinceData(res);
            },
            onError: () => {
                toast.error('Something Went Wrong with Provinces!');
            },
        }
    );

    const { refetch: getRegency } = useQuery<Regency[], Error>(
        "regency",
        async () => {
            return await RequestService.getRegency(provinceId);
        },
        {
            enabled: !!provinceId,
            onSuccess: (res) => {
                setRegencyData(res);
            },
            onError: () => {
                toast.error('Something Went Wrong with Regencies!');
            },
        }
    );

    const { refetch: getDistrict } = useQuery<District[], Error>(
        "district",
        async () => {
            return await RequestService.getDistrict(regencyId);
        },
        {
            enabled: !!regencyId,
            onSuccess: (res) => {
                setDistrictData(res);
            },
            onError: () => {
                toast.error('Something Went Wrong with Districts!');
            },
        }
    );

    const { refetch: getVillage } = useQuery<Village[], Error>(
        "village",
        async () => {
            return await RequestService.getVillage(districtId);
        },
        {
            enabled: !!districtId,
            onSuccess: (res) => {
                setVillageData(res);
            },
            onError: () => {
                toast.error('Something Went Wrong with Villages!');
            },
        }
    );

    const setPersistedState = (key: string, value: number | null, setState: Dispatch<SetStateAction<number | null>>) => {
        if (value !== null) {
            localStorage.setItem(key, value.toString());
        } else {
            localStorage.removeItem(key);
        }
        setState(value);
    };
    
    const getPersistedState = (key: string): number | null => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? parseInt(storedValue) : null;
    };

    useEffect(() => {
        getProvince();

        const storedProvinceId = getPersistedState('provinceId');
        if (storedProvinceId) setProvinceId(storedProvinceId);

        const storedRegencyId = getPersistedState('regencyId');
        if (storedRegencyId) setRegencyId(storedRegencyId);

        const storedDistrictId = getPersistedState('districtId');
        if (storedDistrictId) setDistrictId(storedDistrictId);

        const storedVillageId = getPersistedState('villageId');
        if (storedVillageId) setVillageId(storedVillageId);
    }, [getProvince]);

    useEffect(() => {
        if (provinceId) {
            setRegencyData(null);
            setDistrictData(null);
            setVillageData(null);
            setPersistedState('regencyId', null, setRegencyId);
            setPersistedState('districtId', null, setDistrictId);
            setPersistedState('villageId', null, setVillageId);
            getRegency();
        }
    }, [getRegency, provinceId]);

    useEffect(() => {
        if (regencyId) {
            setDistrictData(null);
            setVillageData(null);
            setPersistedState('districtId', null, setDistrictId);
            setPersistedState('villageId', null, setVillageId);
            getDistrict();
        }
    }, [getDistrict, regencyId]);

    useEffect(() => {
        if (districtId) {
            setVillageData(null);
            setPersistedState('villageId', null, setVillageId);
            getVillage();
        }
    }, [getVillage, districtId]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, setState: Dispatch<SetStateAction<number | null>>, key: string) => {
        const value = parseInt(event.target.value);
        setPersistedState(key, value, setState);
    };

    const screenSize = useScreenSize();

    return (
        <MainLayout typeLayout={`Layout 3 ${screenSize}`}>
            <section className='container mx-auto my-24'>
                <div className='w-full px-4'>
                    <div className='grid grid-cols-12 md:gap-5 lg:gap-10'>
                        <div className='col-span-12 md:col-span-5 lg:col-span-3 mb-5 md:mb-0'>
                            <FilterSection
                                provinceData={provinceData}
                                regencyData={regencyData}
                                districtData={districtData}
                                villageData={villageData}
                                provinceId={provinceId}
                                regencyId={regencyId}
                                districtId={districtId}
                                villageId={villageId}
                                setProvinceId={setProvinceId}
                                setRegencyId={setRegencyId}
                                setDistrictId={setDistrictId}
                                setVillageId={setVillageId}
                                handleChange={handleChange}
                            />
                        </div>

                        <div className='col-span-12 md:col-span-7 lg:col-span-9'>
                            <LocationContainer villageId={villageId} villageData={villageData} />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ContainerTestSelect;
