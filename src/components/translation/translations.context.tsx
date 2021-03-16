import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { LangContextState } from './translations.types';
import { getInitialLang, updateLangQueryParam } from '#components/translation/translation.utils';

const langContext = createContext<LangContextState | undefined>(undefined);

export const LangContextProvider: FC = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang());

    useEffect(() => {
        updateLangQueryParam(lang);
    }, [lang]);

    return <langContext.Provider value={{ lang, setLang }}>{children}</langContext.Provider>;
};

export const useLangContext = (): LangContextState => {
    const langState: LangContextState | undefined = useContext(langContext);
    if (!langState) {
        throw new Error(`useLangContext must be used within a LangContextProvider`);
    }
    return React.useMemo(() => langState, [langState]);
};
