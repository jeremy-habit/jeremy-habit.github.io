import React, { FC } from 'react';
import { StyledTopBar } from './topBar.styled';
import { LanguageDropdown } from './languageDropdown/LanguageDropdown';
import { useTranslation } from '#modules/react-translation';

export const TopBar: FC = () => {
    const { t } = useTranslation(['tesdst', 'common']);
    return (
        <StyledTopBar>
            {t('test:welcome.coucou')}
            <LanguageDropdown />
        </StyledTopBar>
    );
};
