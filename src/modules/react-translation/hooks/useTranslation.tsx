import { useEffect, useState } from 'react';
import { TranslationFile, TranslationFileNameList, TranslationHook } from '../types';
import { DEFAULT_TRANSLATION_FILE_NAME } from '../constants';
import { useLanguageContext } from '../context';
import { translate } from '../utils/translation.utils';
import { importTranslationFile } from '../utils/translationFiles.utils';

export const useTranslation = (translationFileNameList: TranslationFileNameList = [DEFAULT_TRANSLATION_FILE_NAME]): TranslationHook => {
    const { language } = useLanguageContext();
    const [translationFiles, setTranslationFiles] = useState<TranslationFile[] | undefined>();

    const prepareTranslationFiles = async () => {
        try {
            const promises = translationFileNameList.map((fileName) => {
                return importTranslationFile(language, fileName);
            });
            await Promise.all(promises).then((values) => {
                setTranslationFiles(values);
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        prepareTranslationFiles();
    }, [language]);

    return {
        t: (key: string) => {
            return translate(language, key, translationFiles);
        },
    };
};
