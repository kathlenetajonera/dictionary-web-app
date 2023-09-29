import linkIcon from '../../assets/icons/icon-new-window.svg';
import { DataType, MeaningType, PhoneticType } from '../../types';
import PlayButton from '../PlayButton';
import Separator from '../Separator';

type Props = {
    data: DataType;
    handleSearch: (word: string) => void;
};

const Content = ({ data, handleSearch }: Props) => {
    const { word, phonetics, meanings, sourceUrls } = data;
    let phonetic = phonetics.find(
        (item: PhoneticType) => item.text && item.audio
    );

    if (!phonetic) {
        phonetic = phonetics.find((item: PhoneticType) => item.text);
    }

    const renderRelatedWords = (label: string, list: string[]) => (
        <div className="flex mb-2">
            <p className="text-gray">{label}</p>
            <div className="flex flex-wrap">
                {list.map((sy: string) => (
                    <p
                        key={sy}
                        className="text-violet font-bold ml-5 cursor-pointer"
                        onClick={() => handleSearch(sy)}
                    >
                        {sy}
                    </p>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold sm:text-5xl">{word}</h1>
                    {phonetic?.text && (
                        <h3 className="text-violet mt-1 sm:mt-3 sm:text-lg">
                            {phonetic.text}
                        </h3>
                    )}
                </div>
                {phonetic?.audio && <PlayButton audio={phonetic.audio} />}
            </div>
            <div>
                {meanings.map((meaning: MeaningType, index: number) => {
                    const { partOfSpeech, definitions, synonyms, antonyms } =
                        meaning;

                    return (
                        <div key={`${partOfSpeech}-${index}`}>
                            <div className="flex items-center my-6">
                                <p className="font-bold italic sm:text-lg">
                                    {partOfSpeech}
                                </p>
                                <Separator />
                            </div>
                            <div className="mb-6 sm:mb-8 lg:mb-12">
                                <p className="text-gray mb-3">Meaning</p>
                                <ul className="list-disc marker:text-violet ml-5 sm:ml-8">
                                    {definitions.map((def, index) => {
                                        const { definition, example } = def;

                                        return (
                                            <li key={index} className="mb-3">
                                                {definition}
                                                {example && (
                                                    <span className="block text-gray mt-2">
                                                        "{example}"
                                                    </span>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {synonyms?.length > 0 &&
                                renderRelatedWords('Synonyms', synonyms)}
                            {antonyms?.length > 0 &&
                                renderRelatedWords('Antonyms', antonyms)}
                        </div>
                    );
                })}
            </div>
            <Separator full additionalClass="mt-8 mb-6" />
            <div className="sm:flex sm:items-center sm:text-xs">
                <p className="text-gray mb-1 sm:mb-0 sm:mr-4">Source</p>
                {sourceUrls.map((url: string) => (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        className="flex items-center underline mr-4"
                    >
                        {url}
                        <span className="ml-2">
                            <img src={linkIcon} alt="new window" />
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Content;
