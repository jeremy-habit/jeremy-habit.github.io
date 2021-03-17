import { useEffect, useState } from 'react';
import {
    DEFAULT_TRANSLATION_FILE,
    importNamespace,
    Namespace,
    translate,
    TranslationFileNameList,
    TranslationHook,
    useLanguageContext,
} from '#modules/react-translation';

export const useTranslation = (translationFileNameList: TranslationFileNameList = [DEFAULT_TRANSLATION_FILE]): TranslationHook => {
    const { language } = useLanguageContext();
    const [namespaces, setNamespaces] = useState<Namespace[] | undefined>();

    const prepareNamespace = async () => {
        try {
            const promises = translationFileNameList.map((namespaceName) => {
                return importNamespace(language, namespaceName);
            });
            await Promise.all(promises).then((values) => {
                setNamespaces(values);
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        prepareNamespace();
    }, [language]);

    return {
        t: (key: string) => {
            return translate(language, key, namespaces);
        },
    };
};
