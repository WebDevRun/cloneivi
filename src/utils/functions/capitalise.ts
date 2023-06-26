export const capitaliseStr = (str: string) => {
  const firstLetter = str[0].toUpperCase()
  return `${firstLetter}${str.slice(1)}`
}

export const capitaliseArr = (arr: string[]) => {
  return arr.map((str) => {
    return capitaliseStr(str)
  })
}
