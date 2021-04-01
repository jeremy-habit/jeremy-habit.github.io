import { TF, TFContent, TFName } from '#modules/react-translation/types/translationFiles.types';

export type KeyFullPathSplitted = { tFName: TFName; keyPath: string };

export type KeyPathValue = TFContent | string | undefined;

export type KeyPathValueFound = { tF?: TF; value?: KeyPathValue };
