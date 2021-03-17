import React, { FC } from 'react';
import { useTranslation, splitKeyFullPath, DEFAULT_TRANSLATION_FILE } from './index';

interface Props {
    keyFullPath: string;
}

export const Translator: FC<Props> = ({ keyFullPath }) => {
    const { translationFileName, keyPath } = splitKeyFullPath(keyFullPath);
    const { t } = useTranslation(translationFileName ? [translationFileName] : [DEFAULT_TRANSLATION_FILE]);
    return <>{t(keyPath)}</>;
};
