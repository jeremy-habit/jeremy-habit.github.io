import { Languages, TranslationFilesList } from '../types';
import { getKeyPathValue, get, splitAllKeys, splitKeyFullPath } from './keyFullPath.utils';
import { errorObjectGiven, errorKeyDoesntExists, errorTranslationFileNotAvailable } from './errors.utils';

export const translate = (language: Languages, keyFullPath: string, translationFilesList?: TranslationFilesList): string => {
    if (!translationFilesList || !Array.isArray(translationFilesList) || translationFilesList.length < 1) return '';

    const { translationFileName, keyPath } = splitKeyFullPath(keyFullPath);
    const splittedKeys = splitAllKeys(keyPath);

    let keyPathValueFound;

    if (translationFileName) {
        const translationFileFromPath = translationFilesList.find((translationFile) => translationFile.name === translationFileName);
        if (!translationFileFromPath) throw new Error(errorTranslationFileNotAvailable(translationFileName));
        keyPathValueFound = getKeyPathValue(splittedKeys, translationFileFromPath);
    } else {
        keyPathValueFound = get(splittedKeys, translationFilesList);
    }

    if (!keyPathValueFound.value) throw new Error(errorKeyDoesntExists(language, keyPath, keyPathValueFound.translationFileName));
    if (typeof keyPathValueFound.value === 'object')
        throw new Error(errorObjectGiven(language, keyPath, keyPathValueFound.translationFileName));
    return keyPathValueFound.value;
};
