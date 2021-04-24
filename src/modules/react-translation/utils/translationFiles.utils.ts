import { Language, TF, TFImported, TFName } from '../types';

export const importTF = async (language: Language, tFName: TFName, translationFilesDirectory: string): Promise<TF> => {
    console.log(':dirname ', __dirname);
    try {
        const tFImported: TFImported = await import(`${__dirname}translationsFiles/${language}/${tFName}`);
        return { name: tFName, content: tFImported.default };
    } catch (error) {
        throw new Error(error);
    }
};
