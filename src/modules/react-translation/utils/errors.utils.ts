import { Languages } from '#modules/react-translation/types';
import { ERROR_PREFIX, ERROR_SUFFIX, TRANSLATION_FILES_SEPARATOR } from '#modules/react-translation/constants';

export const formatError = (errorMessage: string, withFormat: boolean): string =>
    withFormat ? `${ERROR_PREFIX} ${errorMessage} ${ERROR_SUFFIX}` : errorMessage;

export const errorObjectGiven = (language: Languages, keyPath: string, translationFileNameFound: string, withFormat = false): string =>
    formatError(`The key ${language}.${keyPath} is an object. String expected`, withFormat);

export const errorKeyDoesntExists = (language: Languages, keyPath: string, translationFileNameFound: string, withFormat = false): string =>
    formatError(`The key ${language}/${translationFileNameFound}${TRANSLATION_FILES_SEPARATOR}${keyPath} doesn't exists`, withFormat);

export const errorTooManySeparators = (separator: string, keyFullPath: string, withFormat = false): string =>
    formatError(`The key ${keyFullPath} contains too many separators. Only one "${separator}" is expected.`, withFormat);

export const errorKeyPathEmpty = (keyFullPath: string, withFormat = false): string =>
    formatError(`There are no keys after the translation file name in the following key full path "${keyFullPath}???"`, withFormat);

export const errorTranslationFileNameEmpty = (keyFullPath: string, withFormat = false): string =>
    formatError(
        `The translation file name is missing before the separator ":" in the following key full path "???${keyFullPath}"`,
        withFormat,
    );

export const errorTranslationFileNotAvailable = (translationFileName: string, withFormat = false): string =>
    formatError(
        `The translation file with the name "${translationFileName}" is not available. Please make sure you added it in the translation files array argument for the hook useTranslation.`,
        withFormat,
    );
