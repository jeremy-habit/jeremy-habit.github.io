import {
    KEY_SEPARATOR,
    TRANSLATION_FILES_SEPARATOR,
    DEFAULT_QUERY_PARAM,
    TRANSLATION_FILES_DIR_NAME,
    Languages,
    Namespace,
    NamespaceImport,
    NamespaceObject,
} from './index';

export const updateLanguageQueryParam = (value: Languages): void => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(DEFAULT_QUERY_PARAM, value);
    window.history.pushState(null, 'null', `?${queryParams.toString()}`);
};

export const getInitialLanguage = (): Languages => {
    const { LANGUAGE_FR, LANGUAGE_EN } = Languages;
    const queryParams = new URLSearchParams(window.location.search);
    const paramLanguage = queryParams.get(DEFAULT_QUERY_PARAM) as Languages;
    if ([LANGUAGE_EN, LANGUAGE_FR].includes(paramLanguage)) {
        return paramLanguage;
    }
    return LANGUAGE_FR;
};

// TODO(@jeremyhabit): renaming namespace
export const importNamespace = async (language: Languages, namespace: string): Promise<Namespace> => {
    const namespaceObject: NamespaceImport = await import(`./${TRANSLATION_FILES_DIR_NAME}/${language}/${namespace}`);
    return { name: namespace, object: namespaceObject.default };
};

// TODO(@jeremyhabit): renaming namespace
export const splitKeyFullPath = (keyFullPath: string): { translationFileName: string | null; keyPath: string } => {
    if (keyFullPath.includes(TRANSLATION_FILES_SEPARATOR)) {
        const splitedNamespaceAndKeys = keyFullPath.split(TRANSLATION_FILES_SEPARATOR);
        if (splitedNamespaceAndKeys.length !== 2) throw new Error('ca va pas du tout la');
        const [translationFileName, keyPath] = splitedNamespaceAndKeys;
        return { translationFileName, keyPath };
    }
    return { translationFileName: null, keyPath: keyFullPath };
};

export const getKeyPath = (keyFullPath: string): string => {
    return splitKeyFullPath(keyFullPath)?.keyPath;
};

export const getNamespaceName = (keyFullPath: string): string | null => {
    return splitKeyFullPath(keyFullPath)?.translationFileName;
};

// TODO(@jeremyhabit): renaming namespace
export const translate = (language: Languages, keyPath: string, namespaces?: Namespace[]): string => {
    const splittedKeys = keyPath.split(KEY_SEPARATOR);
    if (!namespaces || !Array.isArray(namespaces) || namespaces.length < 1) return '';

    const translatedValues = namespaces.map((namespace) => {
        return splittedKeys.reduce((acc: NamespaceObject | string | undefined, splittedKey) => {
            if (typeof acc === 'object') return acc?.[splittedKey];
            return undefined;
        }, namespace.object);
    });

    const translatedValue = translatedValues.find((elt) => elt);

    if (typeof translatedValue === 'object') return `!!! The key ${language}.${keyPath} is an object. String expected. !!!`;

    return translatedValue || `!!! The key ${language}.${keyPath} doesn't exists !!!`;
};
