import React, { FC } from 'react';
import { Languages } from '#components/translation/translations.types';
import { ucFirst } from '#utils/string.utils';
import { StyledDropdown } from './languageDropdown.styled';
import { useLangContext } from '#components/translation/translations.context';

export const LanguageDropdown: FC = () => {
    const { LANG_FR, LANG_EN } = Languages;

    const { lang, setLang } = useLangContext();

    const languageOptions = [
        { label: ucFirst(LANG_FR), value: LANG_FR },
        { label: ucFirst(LANG_EN), value: LANG_EN },
    ];

    return (
        <StyledDropdown
            options={languageOptions}
            onOptionChanged={(option) => setLang(option.value as Languages)}
            defaultOption={languageOptions.find((option) => lang === option.value)}
        />
    );
};
