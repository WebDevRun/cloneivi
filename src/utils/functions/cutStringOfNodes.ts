/**
 * Укорачивает текст в HTML стоке до указанного количества символов
 * @param stringNode - Строка в виде `<div><p>Текст</p><p>Текст</p></div>`
 * @param numChar - Количество символов текста, которые нужно оставить.
 * Если в тексте выше нужно оставить 4 символа, то
 * @returns - вернет `<div><p>Текс...</p></div>`
 */

export function cutStringOfNodes(stringNode: string, numChar: number) {
  const arrStringNode = stringNode.replace(/></g, '>#*#<').split('#*#')

  const regexp: RegExp =
    /(?<=>)([А-Яа-яё№]+|\w|\d|\n|[«»().,\-:;@#$%^&*\[\]"'+–/\/®°⁰!?{}|`~]| )+?(?=<\/)/g

  let num = 0
  const arrNodeSlice = arrStringNode.map((item) => {
    const text = item.match(regexp)

    if (text) {
      if (num === numChar) {
        item = ''
      }

      if (num + text[0].length > numChar) {
        const partText = text[0].slice(0, numChar - num)

        item = item.replace(text[0], `${partText}...`)
        num = num + partText.length
      }

      if (num < numChar) {
        num = num + text[0].length
      }
    }

    return item
  })

  return arrNodeSlice.join('')
}
