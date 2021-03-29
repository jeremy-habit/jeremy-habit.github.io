import { Languages, TranslationFilesList } from '../types';
import { getKeyPathValue, splitAllKeys } from './keyFullPath.utils';
import { errorObjectGiven, errorKeyDoesntExists } from './errors.utils';

export const translate = (language: Languages, keyPath: string, translationFilesList?: TranslationFilesList): string => {
    if (!translationFilesList || !Array.isArray(translationFilesList) || translationFilesList.length < 1) return '';

    const splittedKeys = splitAllKeys(keyPath);
    const keyPathValue = getKeyPathValue(splittedKeys, translationFilesList);

    if (!keyPathValue) return errorKeyDoesntExists(language, keyPath);
    if (typeof keyPathValue === 'object') return errorObjectGiven(language, keyPath);
    return keyPathValue;
};
