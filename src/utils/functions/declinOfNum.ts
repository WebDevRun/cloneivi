/**
 * Склонение слов для чисел
 * @param number - Число
 * @param words - Массив со словами 
 * пример для русского 
 * ["фильм", "фильма", "фильмов", "фильм"] 
 * пример для английского
 * ["films", "films", "films", "film"]
 * @returns 
 */

export function declOfNum(number: number, words: string[]) {
  if (number === 1) return words[3]
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ]
}
