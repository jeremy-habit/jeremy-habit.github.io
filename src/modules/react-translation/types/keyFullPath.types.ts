import { TranslationFileContent } from '#modules/react-translation/types/translationFiles.types';

export type KeyFullPathCouple = { translationFileName: string | null; keyPath: string };

export type KeyPathValue = { translationFileName: string; value: TranslationFileContent | string | undefined };
