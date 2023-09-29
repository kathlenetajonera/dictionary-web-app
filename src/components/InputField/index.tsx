import { useContext } from 'react';
import { ThemeContext } from '../../App';
import icon from '../../assets/icons/icon-search.svg';

const InputField = () => {
    const { selectedFont } = useContext(ThemeContext);

    return (
        <div className="relative my-6 sm:my-10">
            <input
                type="text"
                className={`outline-none w-full py-4 px-6 bg-lightGray rounded-2xl font-${selectedFont} font-bold placeholder:font-normal`}
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
