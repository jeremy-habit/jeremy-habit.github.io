import React, { FC } from 'react';
import { StyledTopBar } from './topBar.styled';
import { LanguageDropdown } from '#components/translation/languageDropdown/LanguageDropdown';

export const TopBar: FC = () => {
    return (
        <StyledTopBar>
            <LanguageDropdown />
        </StyledTopBar>
    );
};
