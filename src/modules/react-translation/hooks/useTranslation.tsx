import { useEffect, useState } from 'react';
import { TFNames, TFs, TranslationVariables, UseTranslationHook } from '../types';
import { DEFAULT_TF_NAME } from '../constants';
import { useLanguageContext } from '../context';
import { translate } from '../utils/translation.utils';
import { importTF } from '../utils/translationFiles.utils';

export const useTranslation = (tFNames: TFNames = [DEFAULT_TF_NAME]): UseTranslationHook => {
    const { language } = useLanguageContext();
    const [tFs, setTFs] = useState<TFs | undefined>();

    const prepareTFs = async () => {
        const promises = tFNames.map((tFName) => {
            return importTF(language, tFName);
        });
        await Promise.all(promises).then((values) => {
            setTFs(values);
        });
    };

    useEffect(() => {
        prepareTFs();
    }, [language]);

    return {
        translate: (keyFullPath: string, variables?: TranslationVariables) => {
            return translate(language, keyFullPath, tFs, variables);
        },
    };
};
