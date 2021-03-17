import React, { FC } from 'react';
import { Languages, useLanguageContext } from '#modules/react-translation';
import { ucFirst } from '#utils/string.utils';
import { StyledDropdown } from './languageDropdown.styled';

export const LanguageDropdown: FC = () => {
    const { LANGUAGE_FR, LANGUAGE_EN } = Languages;

    const { language, setLanguage } = useLanguageContext();

    const languageOptions = [
        { label: ucFirst(LANGUAGE_FR), value: LANGUAGE_FR },
        { label: ucFirst(LANGUAGE_EN), value: LANGUAGE_EN },
    ];

    return (
        <StyledDropdown
            options={languageOptions}
            onOptionChanged={(option) => setLanguage(option.value as Languages)}
            defaultOption={languageOptions.find((option) => language === option.value)}
        />
    );
};
