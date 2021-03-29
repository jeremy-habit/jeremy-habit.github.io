import React, { FC } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { DEFAULT_TRANSLATION_FILE_NAME } from '../constants';
import { splitKeyFullPath } from '../utils/keyFullPath.utils';

interface Props {
    keyFullPath: string;
}

export const Translator: FC<Props> = ({ keyFullPath }) => {
    const { translationFileName, keyPath } = splitKeyFullPath(keyFullPath);
    const { t } = useTranslation(translationFileName ? [translationFileName] : [DEFAULT_TRANSLATION_FILE_NAME]);
    return <>{t(keyPath)}</>;
};
