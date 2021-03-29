export type TranslationFileName = string;

export type TranslationFileNameList = TranslationFileName[];

export type TranslationFileContent = { [key: string]: string | TranslationFileContent };

export type TranslationFile = { name: string; content: TranslationFileContent };

export type TranslationFilesList = TranslationFile[];

export type TranslationFileImported = { default: TranslationFileContent };
