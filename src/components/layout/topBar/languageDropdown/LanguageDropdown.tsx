import React, { FC } from 'react';
import { ucFirst } from '#utils/string.utils';
import { StyledDropdown } from './languageDropdown.styled';
import { Languages } from '#modules/react-translation/types';
import { useLanguageContext } from '#modules/react-translation/context';

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
