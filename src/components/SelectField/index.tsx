import { useContext } from 'react';
import { ThemeContext } from '../../App';

const options = [
    {
        key: 'sans',
        label: 'Sans Serif',
    },
    {
        key: 'serif',
        label: 'Serif',
    },
    {
        key: 'mono',
        label: 'Mono',
    },
];

const SelectField = () => {
    const { setSelectedFont } = useContext(ThemeContext);

    const handleChange = (e: any) => {
        const { value } = e.target;
        setSelectedFont(value);
    };

    return (
        <select
            className={`appearance-none outline-none bg-transparent bg-check bg-no-repeat bg-right pr-6 text-right text-md`}
            defaultValue="serif"
            onChange={handleChange}
        >
            {options.map(({ key, label }) => (
                <option key={key} value={key}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export default SelectField;
