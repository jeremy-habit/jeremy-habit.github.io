export interface TranslationHook {
    t: TFunction;
}

export type TFunction = (key: string) => string;
