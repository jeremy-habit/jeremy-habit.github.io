import { KEY_SEPARATOR, TRANSLATION_FILES_SEPARATOR } from '../constants';
import { TranslationFileContent, TranslationFilesList } from '../types';

export const getKeyPathValue = (
    splittedKeys: string[],
    translationFilesList: TranslationFilesList,
): TranslationFileContent | string | undefined => {
    const translatedValues = translationFilesList.map((translationFile) => {
        return splittedKeys.reduce((acc: TranslationFileContent | string | undefined, splittedKey) => {
            if (typeof acc === 'object') return acc?.[splittedKey];
            return undefined;
        }, translationFile.content);
    });

    return translatedValues.find((elt) => elt);
};

// TODO(@jeremyhabit): error throw text  + vérif
export const splitKeyFullPath = (keyFullPath: string): { translationFileName: string | null; keyPath: string } => {
    if (keyFullPath.includes(TRANSLATION_FILES_SEPARATOR)) {
        const splitted = keyFullPath.split(TRANSLATION_FILES_SEPARATOR);
        if (splitted.length !== 2) throw new Error('ca va pas du tout la');
        const [translationFileName, keyPath] = splitted;
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
