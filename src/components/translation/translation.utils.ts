import { Languages } from '#components/translation/translations.types';

export const updateLangQueryParam = (value: Languages): void => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('lang', value);
    window.history.pushState(null, 'null', `?${queryParams.toString()}`);
};

export const getInitialLang = (): Languages => {
    const { LANG_FR, LANG_EN } = Languages;
    const queryParams = new URLSearchParams(window.location.search);
    const paramLang = queryParams.get('lang') as Languages;
    if ([LANG_EN, LANG_FR].includes(paramLang)) {
        return paramLang;
    }
    return LANG_FR;
};
