import { createContext, useState } from 'react';
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

    return (
        <ThemeContext.Provider value={{ selectedFont, setSelectedFont }}>
            <div
                className={`p-5 pb-20 max-w-[46.25rem] mx-auto ${
                    fontClasses[selectedFont as keyof FontTypes]
                } sm:p-8 sm:pb-20 lg:pt-14`}
            >
                <Header />
                <InputField />
                <Content />
            </div>
        </ThemeContext.Provider>
    );
}

type FontTypes = {
    sans: string;
    serif: string;
    mono: string;
};

export default App;
