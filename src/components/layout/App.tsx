import React, { FC } from 'react';
import { TopBar } from '#components/layout/topBar/TopBar';
import { Translator, LanguageContextProvider } from '#modules/react-translation';

export const App: FC = () => {
    return (
        <LanguageContextProvider>
            <TopBar />
            <Translator keyFullPath="test:welcome.coucoud" />
        </LanguageContextProvider>
    );
};
