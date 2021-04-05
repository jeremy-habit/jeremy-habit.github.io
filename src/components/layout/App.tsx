import React, { FC } from 'react';
import { TopBar } from '#components/layout/topBar/TopBar';
import { Translator, LanguageContextProvider } from '#modules/react-translation';

export const App: FC = () => {
    return (
        <LanguageContextProvider config={{ defaultLanguage: 'FR' }}>
            <TopBar />
            <Translator keyFullPath="common:welcome.coucou" variables={{ monster: 'disizilla' }} />
        </LanguageContextProvider>
    );
};
