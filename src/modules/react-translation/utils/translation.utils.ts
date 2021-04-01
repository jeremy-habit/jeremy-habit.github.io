import { Languages, TFs } from '../types';
import { getKeyPathValue, findKeyPathValueFromTFs, splitAllKeys, splitKeyFullPath, hasTFName } from './keyFullPath.utils';
import { errorObjectGiven, errorKeyDoesntExists, errorTFNotAvailable } from './errors.utils';

const translateWithTargetedTFName = (language: Languages, keyFullPath: string, tFs: TFs) => {
    const { tFName, keyPath } = splitKeyFullPath(keyFullPath);
    const splittedKeys = splitAllKeys(keyPath);
    const tFTargeted = tFs.find((tF) => tF.name === tFName);
    if (!tFTargeted) throw new Error(errorTFNotAvailable(tFName));
    const keyPathValue = getKeyPathValue(splittedKeys, tFTargeted);

    if (!keyPathValue) throw new Error(errorKeyDoesntExists(language, keyPath, tFName));
    if (typeof keyPathValue === 'object') throw new Error(errorObjectGiven(language, keyPath, tFName));

    return keyPathValue;
};

const translateWithoutTargetedTFName = (language: Languages, keyFullPath: string, tFs: TFs) => {
    const splittedKeys = splitAllKeys(keyFullPath);
    const { tF, value } = findKeyPathValueFromTFs(splittedKeys, tFs);
    const tFNamesRange = `{${tFs.map((currentTF) => currentTF.name).join(' | ')}}`;

    if (!value) throw new Error(errorKeyDoesntExists(language, keyFullPath, tFNamesRange));
    if (typeof value === 'object') throw new Error(errorObjectGiven(language, keyFullPath, tF?.name));

    return value;
};

export const translate = (language: Languages, keyFullPath: string, tFs?: TFs): string => {
    if (!tFs || !Array.isArray(tFs) || tFs.length < 1) return '';

    if (hasTFName(keyFullPath)) {
        return translateWithTargetedTFName(language, keyFullPath, tFs);
    }

    return translateWithoutTargetedTFName(language, keyFullPath, tFs);
};
