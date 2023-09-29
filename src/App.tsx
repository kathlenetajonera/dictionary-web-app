import { createContext, useEffect, useState } from 'react';
import { fetchDefinition } from './utils';
import { DataType, FontTypes } from './types';
import Header from './components/Header';
import InputField from './components/InputField';
import Content from './components/Content';
import EmptyPlaceholder from './components/EmptyPlaceholder';
import Skeleton from './components/Skeleton';

export const ThemeContext = createContext<any>(null);

const fontClasses: FontTypes = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono',
};

function App() {
    const [selectedFont, setSelectedFont] = useState('serif');
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState<DataType | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (word: string) => {
        setKeyword(word);
        setIsLoading(true);

        const res = await fetchDefinition(word);

        setIsLoading(false);
        res?.length ? setData(res[0]) : setData(null);
    };

    useEffect(() => {
        const isDarkMode = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ selectedFont, setSelectedFont }}>
            <div className="min-h-screen overflow-x-hidden transition-[background] duration-300 text-black dark:bg-black dark:text-white">
                <div
                    className={`p-5 pb-20 mx-auto ${
                        fontClasses[selectedFont as keyof FontTypes]
                    } sm:p-8 sm:pb-20 lg:pt-14 lg:max-w-[46.25rem]`}
                >
                    <Header />
                    <InputField
                        keyword={keyword}
                        setKeyword={setKeyword}
                        handleSearch={handleSearch}
                    />
                    {isLoading && <Skeleton />}
                    {data ? (
                        <Content data={data} handleSearch={handleSearch} />
                    ) : (
                        <EmptyPlaceholder />
                    )}
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
