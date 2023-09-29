import linkIcon from '../../assets/icons/icon-new-window.svg';
import PlayButton from '../PlayButton';
import Separator from '../Separator';

const Content = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold sm:text-5xl">keyboard</h1>
                    <h3 className="text-violet mt-1 sm:mt-3 sm:text-lg">
                        /'ki:b:d/
                    </h3>
                </div>
                <PlayButton />
            </div>
            <div>
                <div className="flex items-center my-6">
                    <p className="font-bold italic sm:text-lg">noun</p>
                    <Separator />
                </div>
                <div className="mb-6 sm:mb-8 lg:mb-12">
                    <p className="text-gray mb-3">Meaning</p>
                    <ul className="list-disc marker:text-violet ml-5 sm:ml-8">
                        <li className="mb-3">
                            (etc). A set of keys used to operate a typewriter,
                            computer, etc
                        </li>
                        <li className="mb-3">
                            (etc). Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Voluptate, in.
                        </li>
                        <li>
                            (etc). Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Voluptate, in.
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <p className="text-gray">Synonyms</p>
                    <div>
                        <p className="text-violet font-bold ml-5">
                            electronic keyboard
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center my-6">
                    <p className="font-bold italic sm:text-lg">verb</p>
                    <Separator />
                </div>
                <div className="mb-5">
                    <p className="text-gray mb-3">Meaning</p>
                    <ul className="list-disc marker:text-violet ml-5 sm:ml-8">
                        <li className="mb-3">
                            (etc). A set of keys used to operate a typewriter,
                            computer, etc
                            <span className="block text-gray mt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <Separator full additionalClass="mt-8 mb-6" />
            <div className="sm:flex sm:items-center sm:text-xs">
                <p className="text-gray mb-1 sm:mb-0 sm:mr-4">Source</p>
                <a
                    href="#"
                    target="_blank"
                    className="flex items-center underline"
                >
                    Lorem ipsum dolor sit amet.
                    <span className="ml-2">
                        <img src={linkIcon} alt="new window" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Content;
