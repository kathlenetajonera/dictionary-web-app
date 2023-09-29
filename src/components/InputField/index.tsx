import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../App';
import { FontTypes } from '../../types';
import icon from '../../assets/icons/icon-search.svg';

type Props = {
    keyword: string;
    setKeyword: (val: string) => void;
    handleSearch: (keyword: string) => void;
};

const InputField = ({ keyword, setKeyword, handleSearch }: Props) => {
    const { selectedFont } = useContext(ThemeContext);
    const [error, setError] = useState('');
    const fontClasses: FontTypes = {
        sans: 'font-sans',
        serif: 'font-serif',
        mono: 'font-mono',
    };

    const handleChange = (e: any) => {
        setError('');
        setKeyword(e.target.value);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            if (keyword.trim().length === 0) {
                setError("Whoops, can't be empty...");
                return;
            }

            handleSearch(keyword);
        }
    };

    useEffect(() => {
        setKeyword('keyboard');
        handleSearch('keyboard');
    }, []);

    return (
        <div className="my-6 sm:my-10">
            <div className="relative">
                <input
                    type="text"
                    className={`outline-none border-[1px] w-full py-4 px-6 bg-lightGray dark:bg-darkGray rounded-2xl font-bold placeholder:font-normal duration-300 ${
                        fontClasses[selectedFont as keyof FontTypes]
                    } ${
                        error
                            ? 'border-red focus:border-red'
                            : 'border-transparent focus:border-violet'
                    }`}
                    placeholder="Search"
                    value={keyword}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <img
                    src={icon}
                    alt="Search"
                    className="absolute top-1/2 right-5 -translate-y-1/2"
                />
            </div>
            {error && <p className="text-red text-sm mt-2">{error}</p>}
        </div>
    );
};

export default InputField;
