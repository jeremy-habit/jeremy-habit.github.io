import React, { createContext, FC, ReactNode, useContext } from 'react';
import { LangContextState } from './translations.types';

const langContext = createContext<LangContextState | undefined>(undefined);

export const LangContextProvider: FC<{ value: LangContextState; children: ReactNode }> = ({ value, children }) => {
    return <langContext.Provider value={value}>{children}</langContext.Provider>;
};

export const useLangContext = (): LangContextState => {
    const langState: LangContextState | undefined = useContext(langContext);
    if (!langState) {
        throw new Error(`useLangContext must be used within a LangContextProvider`);
    }
    return React.useMemo(() => langState, [langState]);
};
