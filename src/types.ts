export type FontTypes = {
    sans: string;
    serif: string;
    mono: string;
};

export type DataType = {
    word: string;
    phonetics: PhoneticType[];
    meanings: MeaningType[];
    license: {
        name: string;
        url: string;
    };
    sourceUrls: string[];
};

export type PhoneticType = {
    text?: string;
    audio: string;
    sourceUrl: string;
    license: {
        name: string;
        url: string;
    };
};

export type MeaningType = {
    partOfSpeech: string;
    definitions: {
        definition: string;
        synonyms: string[];
        antonyms: string[];
        example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
};
