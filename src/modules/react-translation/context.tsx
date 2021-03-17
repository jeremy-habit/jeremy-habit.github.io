import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { LanguageContextState, getInitialLanguage, updateLanguageQueryParam } from './index';

export const languageContext = createContext<LanguageContextState | undefined>(undefined);

export const LanguageContextProvider: FC = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage());

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
