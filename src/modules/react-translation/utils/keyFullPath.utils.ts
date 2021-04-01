import { DEFAULT_TRANSLATION_FILE_NAME, KEY_SEPARATOR, TRANSLATION_FILES_SEPARATOR } from '../constants';
import { KeyFullPathCouple, KeyPathValue, TranslationFile, TranslationFileContent, TranslationFilesList } from '../types';
import { errorKeyPathEmpty, errorTooManySeparators, errorTranslationFileNameEmpty } from '../utils/errors.utils';

export const getKeyPathValue = (splittedKeys: string[], translationFile: TranslationFile): KeyPathValue => {
    const value = splittedKeys.reduce((acc: TranslationFileContent | string | undefined, splittedKey) => {
        if (typeof acc === 'object') return acc?.[splittedKey];
        return undefined;
    }, translationFile.content);
    return { translationFileName: translationFile.name, value };
};

export const get = (splittedKeys: string[], translationFilesList: TranslationFilesList): KeyPathValue => {
    let keyPathValue: KeyPathValue = { translationFileName: DEFAULT_TRANSLATION_FILE_NAME, value: undefined };
    for (let i = 0; i < translationFilesList.length; i += 1) {
        keyPathValue = getKeyPathValue(splittedKeys, translationFilesList[i]);
        if (keyPathValue.value && typeof keyPathValue.value !== 'object') {
            break;
        }
    }
    return keyPathValue;
};

export const splitKeyFullPath = (keyFullPath: string): KeyFullPathCouple => {
    if (keyFullPath.includes(TRANSLATION_FILES_SEPARATOR)) {
        const splitted = keyFullPath.split(TRANSLATION_FILES_SEPARATOR);
        if (splitted.length > 2) throw new Error(errorTooManySeparators(TRANSLATION_FILES_SEPARATOR, keyFullPath));
        const [translationFileName, keyPath] = splitted;
        if (!translationFileName) throw new Error(errorTranslationFileNameEmpty(keyFullPath));
        if (!keyPath) throw new Error(errorKeyPathEmpty(keyFullPath));
        return { translationFileName, keyPath };
    }
    return { translationFileName: null, keyPath: keyFullPath };
};

export const getKeyPath = (keyFullPath: string): string => {
    return splitKeyFullPath(keyFullPath)?.keyPath;
};

export const getTranslationFileName = (keyFullPath: string): string | null => {
    return splitKeyFullPath(keyFullPath)?.translationFileName;
};

export const splitAllKeys = (keyPath: string): string[] => keyPath.split(KEY_SEPARATOR);
