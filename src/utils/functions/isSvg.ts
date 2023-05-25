export function isSvg(path: string) {
  return path
    ? path.split('/').at(-1)?.split('.').at(-1) === 'svg'
      ? true
      : false
    : false
}