import { Dispatch, SetStateAction } from 'react';

export enum Languages {
    LANG_FR = 'fr',
    LANG_EN = 'en',
}

export enum Namespaces {
    COMMON = 'common',
}

export interface LangContextState {
    lang: Languages;
    setLang: Dispatch<SetStateAction<Languages>>;
}
