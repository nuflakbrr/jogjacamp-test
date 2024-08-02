import { FC, Dispatch, SetStateAction } from 'react';

import { Province, Regency, District, Village } from '../../../../interfaces';
import SelectFilter from './SelectFilter';

interface FilterSectionProps {
    provinceData: Province[] | null;
    regencyData: Regency[] | null;
    districtData: District[] | null;
    villageData: Village[] | null;
    provinceId: number | null;
    regencyId: number | null;
    districtId: number | null;
    villageId: number | null;
    setProvinceId: any;
    setRegencyId: any;
    setDistrictId: any;
    setVillageId:any;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>, setState: Dispatch<SetStateAction<number | null>>, key: string) => void;
}

const FilterSection: FC<FilterSectionProps> = ({
    provinceData,
    regencyData,
    districtData,
    villageData,
    provinceId,
    regencyId,
    districtId,
    villageId,
    setProvinceId,
    setRegencyId,
    setDistrictId,
    setVillageId,
    handleChange
}) => (
    <div className="sticky top-3">
        <div className="bg-gray-100 rounded-lg px-4 py-5">
            <h1 className='font-sans font-bold text-xl'>Filter</h1>
            <SelectFilter
                label="Provinsi"
                name="province"
                id="province"
                options={provinceData || []}
                value={provinceId}
                handleChange={(e) => handleChange(e, setProvinceId, 'provinceId')}
                disabled={false}
            />
            <SelectFilter
                label="Kota/Kab"
                name="regencies"
                id="regencies"
                options={regencyData || []}
                value={regencyId}
                handleChange={(e) => handleChange(e, setRegencyId, 'regencyId')}
                disabled={!provinceId}
            />
            <SelectFilter
                label="Kecamatan"
                name="districs"
                id="districs"
                options={districtData || []}
                value={districtId}
                handleChange={(e) => handleChange(e, setDistrictId, 'districtId')}
                disabled={!regencyId}
            />
            <SelectFilter
                label="Desa"
                name="villages"
                id="villages"
                options={villageData || []}
                value={villageId}
                handleChange={(e) => handleChange(e, setVillageId, 'villageId')}
                disabled={!districtId}
            />
        </div>
    </div>
);

export default FilterSection;
