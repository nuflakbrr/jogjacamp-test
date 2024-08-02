import { FC } from 'react';

import { Village } from '../../../../interfaces';

interface LocationContainerProps {
    villageId: number | null;
    villageData: Village[] | null;
}

const LocationContainer: FC<LocationContainerProps> = ({ villageId, villageData }) => (
    <div className="grid grid-cols-12 gap-5">
        {villageId && villageData
            ? villageData.map((village) => (
                <div className="col-span-12 bg-transparent border rounded-lg p-5" key={village.id}>
                  <h1 className="font-sans font-bold">{village.name}</h1>
                  
                  <p className='font-sans font-normal text-base text-gray-500 my-3'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                  <span className='font-sans font-semibold text-gray-500 text-sm'>Last updated 5 mins ago</span>
                </div>
            ))
            : null
        }
    </div>
);

export default LocationContainer;
