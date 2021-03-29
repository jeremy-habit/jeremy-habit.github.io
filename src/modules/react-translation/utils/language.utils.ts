import { Languages } from '../types';
import { DEFAULT_QUERY_PARAM } from '../constants';

export const updateLanguageQueryParam = (value: Languages): void => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(DEFAULT_QUERY_PARAM, value);
    window.history.pushState(null, 'null', `?${queryParams.toString()}`);
};

export const getInitialLanguage = (): Languages => {
    const { LANGUAGE_FR, LANGUAGE_EN } = Languages;
    const queryParams = new URLSearchParams(window.location.search);
    const paramLanguage = queryParams.get(DEFAULT_QUERY_PARAM) as Languages;
    if ([LANGUAGE_EN, LANGUAGE_FR].includes(paramLanguage)) {
        return paramLanguage;
    }
    return LANGUAGE_FR;
};
