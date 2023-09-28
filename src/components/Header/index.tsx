import logo from '../../assets/icons/logo.svg';
import ModeToggle from '../ModeToggle';
import SelectField from '../SelectField';

const Header = () => {
    return (
        <div className="flex justify-between">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex items-center">
                <SelectField />
                <span className="w-[1px] h-full bg-lightGray mx-4"></span>
                <ModeToggle />
            </div>
        </div>
    );
};

export default Header;
