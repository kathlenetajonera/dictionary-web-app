import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import Content from './components/Content';

export const ThemeContext = createContext<any>(null);

function App() {
    const [selectedFont, setSelectedFont] = useState('serif');
    const fontClasses: FontTypes = {
        sans: 'font-sans',
        serif: 'font-serif',
        mono: 'font-mono',
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
            <div className="min-h-screen transition-[background] duration-300 text-black dark:bg-black dark:text-white">
                <div
                    className={`p-5 pb-20 mx-auto ${
                        fontClasses[selectedFont as keyof FontTypes]
                    } sm:p-8 sm:pb-20 lg:pt-14 lg:max-w-[46.25rem]`}
                >
                    <Header />
                    <InputField />
                    <Content />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export type FontTypes = {
    sans: string;
    serif: string;
    mono: string;
};

export default App;
