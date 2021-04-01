import React, { FC } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { splitKeyFullPath } from '#modules/react-translation/utils/keyFullPath.utils';

interface Props {
    keyFullPath: string;
}

export const Translator: FC<Props> = ({ keyFullPath }) => {
    const { tFName, keyPath } = splitKeyFullPath(keyFullPath);
    const { translate } = useTranslation([tFName]);
    return <>{translate(keyPath)}</>;
};
