import { Languages, TranslationFile, TranslationFileImported } from '../types';
import { TRANSLATION_FILES_DIR_NAME } from '../constants';

export const importTranslationFile = async (language: Languages, translationFileName: string): Promise<TranslationFile> => {
    try {
        const importedTranslationFile: TranslationFileImported = await import(
            `../${TRANSLATION_FILES_DIR_NAME}/${language}/${translationFileName}`
        );
        return { name: translationFileName, content: importedTranslationFile.default };
    } catch (error) {
        throw new Error(error);
    }
};
