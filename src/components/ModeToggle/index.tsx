import icon from '../../assets/icons/icon-moon.svg';

const ModeToggle = () => {
    return (
        <div className="flex items-center">
            <label className="cursor-pointer mr-2.5">
                <input type="checkbox" className="sr-only peer" />
                <div
                    className={`flex items-center px-1 w-10 h-5 bg-gray rounded-full after:transition-all
                        after:content-[''] after:block after:w-3.5 after:h-3.5 after:bg-white after:rounded-full
                        peer-checked:after:translate-x-[130%]
                `}
                />
            </label>

            <div className="max-w-[1.25rem]">
                <img
                    src={icon}
                    alt="Mode toggle"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default ModeToggle;
