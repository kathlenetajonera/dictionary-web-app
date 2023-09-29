import { useContext } from 'react';
import { FontTypes, ThemeContext } from '../../App';
import icon from '../../assets/icons/icon-search.svg';

const InputField = () => {
    const { selectedFont } = useContext(ThemeContext);
    const fontClasses: FontTypes = {
        sans: 'font-sans',
        serif: 'font-serif',
        mono: 'font-mono',
    };

    return (
        <div className="relative my-6 sm:my-10">
            <input
                type="text"
                className={`outline-none w-full py-4 px-6 bg-lightGray dark:bg-darkGray rounded-2xl ${
                    fontClasses[selectedFont as keyof FontTypes]
                } font-bold placeholder:font-normal duration-300`}
                placeholder="Enter word.."
            />
            <img
                src={icon}
                alt="Search"
                className="absolute top-1/2 right-5 -translate-y-1/2"
            />
        </div>
    );
};

export default InputField;
