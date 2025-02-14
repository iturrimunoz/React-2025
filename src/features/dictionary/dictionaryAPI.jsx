import { dictionaryTranslations } from './dictionaryTranslations';

/**
 * Traduce una palabra de un idioma a otro.
 * 
 * @param {string} word La palabra que se desea traducir.
 * @param {string} fromLanguage El idioma de la palabra original.
 * @param {string} toLanguage El idioma al que se desea traducir.
 * @returns {string} La palabra traducida, o un mensaje de error si no se encuentra.
 */


export const translateWord = (word, fromLanguage, toLanguage) => {
  // Comprobar si la palabra existe en el idioma de origen
  if (dictionaryTranslations[fromLanguage] && dictionaryTranslations[fromLanguage][word]) {
    const translation = dictionaryTranslations[fromLanguage][word][toLanguage];
    if (translation) {
      return translation;
    } else {
      return `No hay traducción disponible para ${word} en ${toLanguage}.`;
    }
  } else {
    return `La palabra "${word}" no se encuentra en el diccionario de ${fromLanguage}.`;
  }
};
