import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { LanguageContextState } from './types';
import { getInitialLanguage, updateLanguageQueryParam } from './utils/language.utils';

export const languageContext = createContext<LanguageContextState | undefined>(undefined);

export interface Props {
    config?: {
        defaultLanguage: string;
    };
}

export const LanguageContextProvider: FC<Props> = ({ children, config }) => {
    const [language, setLanguage] = useState(getInitialLanguage(config?.defaultLanguage));

    useEffect(() => {
        updateLanguageQueryParam(language);
    }, [language]);

    return <languageContext.Provider value={{ language, setLanguage }}>{children}</languageContext.Provider>;
};

export const useLanguageContext = (): LanguageContextState => {
    const languageState: LanguageContextState | undefined = useContext(languageContext);
    if (!languageState) {
        throw new Error(`useLanguageContext must be used within a LanguageContextProvider`);
    }
    return React.useMemo(() => languageState, [languageState]);
};
