export interface UseTranslationHook {
    translate: TranslateFunction;
}

export type TranslateFunction = (key: string) => string;
