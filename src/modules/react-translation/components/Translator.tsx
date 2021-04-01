import React, { FC } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { splitKeyFullPath } from '#modules/react-translation/utils/keyFullPath.utils';
import { DEFAULT_TRANSLATION_FILE_NAME } from '#modules/react-translation/constants';

interface Props {
    target: string;
}

export const Translator: FC<Props> = ({ target }) => {
    const { translationFileName, keyPath } = splitKeyFullPath(target);
    const { t } = useTranslation(translationFileName ? [translationFileName] : [DEFAULT_TRANSLATION_FILE_NAME]);
    return <>{t(keyPath)}</>;
};
