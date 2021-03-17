import { Dispatch, SetStateAction } from 'react';

export enum Languages {
    LANGUAGE_FR = 'fr',
    LANGUAGE_EN = 'en',
}

export interface LanguageContextState {
    language: Languages;
    setLanguage: Dispatch<SetStateAction<Languages>>;
}

export type NamespaceObject = { [key: string]: string | NamespaceObject };

export type Namespace = { name: string; object: NamespaceObject };

export type NamespaceImport = { default: NamespaceObject };

export interface TranslationHook {
    t: TFunction;
}

export type TFunction = (key: string) => string;

export * from './translationFiles.types';
