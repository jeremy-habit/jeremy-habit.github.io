import React, { FC } from 'react';
import { LangContextProvider } from '#components/translation/translations.context';
import { TopBar } from '#components/layout/topBar/TopBar';

export const App: FC = () => {
    return (
        <LangContextProvider>
            <TopBar />
        </LangContextProvider>
    );
};
