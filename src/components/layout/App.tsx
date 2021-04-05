import React, { FC } from 'react';
import { TopBar } from '#components/layout/topBar/TopBar';
import { Translator, LanguageContextProvider } from '#modules/react-translation';
import { LANGUAGES } from '#constants/languages.constants';

export const App: FC = () => {
    return (
        <LanguageContextProvider config={{ languages: LANGUAGES }}>
            <TopBar />
            <Translator keyFullPath="common:welcome.coucou" variables={{ monster: 'disizilla' }} />
        </LanguageContextProvider>
    );
};
