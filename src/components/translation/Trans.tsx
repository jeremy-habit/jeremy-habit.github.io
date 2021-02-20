import React, { FC, useEffect, useState } from 'react';
import { useLangContext } from './translations.context';
import { Namespaces } from './translations.types';

interface Props {
    jsonKey: string;
    namespace?: Namespaces;
}

export const Trans: FC<Props> = ({ jsonKey, namespace = Namespaces.COMMON }) => {
    const { lang } = useLangContext();
    const [translatedValue, setTranslatedValue] = useState('');

    const importNamespaceObject = async () => {
        const namespaceObject = await import(`../../locales/${lang}/${namespace}`);
        const newTanslatedValue = namespaceObject?.default?.[jsonKey];
        setTranslatedValue(newTanslatedValue || `!!! The key ${lang}:${namespace}:${jsonKey} doesn't exists !!!`);
    };

    useEffect(() => {
        importNamespaceObject();
    });
    return <span>{translatedValue}</span>;
};
