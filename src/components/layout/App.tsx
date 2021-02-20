import React, { FC, useEffect, useState } from 'react';
import { Trans } from '../translation/Trans';
import { LangContextProvider } from '#components/translation/translations.context';
import { Languages, Namespaces } from '../translation/translations.types';
import { TopBar } from './TopBar';

export const App: FC = () => {
    const { LANG_FR, LANG_EN } = Languages;

    const getInitialLang = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const paramLang = queryParams.get('lang') as Languages;
        if ([LANG_EN, LANG_FR].includes(paramLang)) {
            return paramLang;
        }
        return LANG_FR;
    };

    const [lang, setLang] = useState(getInitialLang());

    const updateLangQueryParam = (value: Languages) => {
        const queryParams = new URLSearchParams(window.location.search);

        queryParams.set('lang', value);
        window.history.pushState(null, 'null', `?${queryParams.toString()}`);
    };

    useEffect(() => {
        updateLangQueryParam(lang);
    }, [lang]);

    return (
        <LangContextProvider value={{ lang, setLang }}>
            <TopBar />
        </LangContextProvider>
    );
};
