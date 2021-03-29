import { Dispatch, SetStateAction } from 'react';

export enum Languages {
    LANGUAGE_FR = 'fr',
    LANGUAGE_EN = 'en',
}

export interface LanguageContextState {
    language: Languages;
    setLanguage: Dispatch<SetStateAction<Languages>>;
}
