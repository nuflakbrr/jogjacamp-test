import { FC } from 'react';

interface SelectFilterProps {
    label: string;
    name: string;
    id: string;
    options: { id: number; name: string }[];
    value: number | null;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled: boolean;
}

const SelectFilter: FC<SelectFilterProps> = ({ label, name, id, options, value, handleChange, disabled }) => (
    <div className="mt-5 flex flex-col items-start gap-1">
        <label htmlFor={id} className='font-sans font-semibold text-lg'>{label}</label>
        <select
            name={name}
            id={id}
            className='w-full px-3 py-2 rounded-lg border shadow-sm'
            onChange={handleChange}
            value={value ?? ""}
            disabled={disabled}
        >
            <option value="" disabled>{`Pilih ${label}`}</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    </div>
);

export default SelectFilter;
