import React, { FC } from 'react';
import { ucFirst } from '#utils/string.utils';
import { StyledDropdown } from './languageDropdown.styled';
import { useLanguageContext } from '#modules/react-translation/context';
import { LANGUAGES } from '#constants/languages.constants';

export const LanguageDropdown: FC = () => {
    const { language, setLanguage } = useLanguageContext();

    const languageOptions = LANGUAGES.map((languageValue) => {
        return { label: ucFirst(languageValue), value: languageValue };
    });

    return (
        <StyledDropdown
            options={languageOptions}
            onOptionChanged={(option) => setLanguage(option.value)}
            defaultOption={languageOptions.find((option) => language === option.value)}
        />
    );
};
