import { Languages } from '#modules/react-translation/types';
import { ERROR_PREFIX, ERROR_SUFFIX } from '#modules/react-translation/constants';

export const formatError = (errorMessage: string): string => `${ERROR_PREFIX} ${errorMessage} ${ERROR_SUFFIX}`;

export const errorObjectGiven = (language: Languages, keyPath: string): string =>
    formatError(`The key ${language}.${keyPath} is an object. String expected`);

export const errorKeyDoesntExists = (language: Languages, keyPath: string): string =>
    formatError(`The key ${language}.${keyPath} doesn't exists`);
