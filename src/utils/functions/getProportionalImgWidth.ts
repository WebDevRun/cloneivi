/**
 * Получает пропорциональную ширину изображения для фиксированной высоты.
 * Путь pathImage должен быть задан с размером в конце '.../280x420'.
 * requiredFixHeight задаем требуемую фиксированную высоту.
 * initCalcWidth задаем ширину по умолчанию.
 */

export function getProportionalImgWidth(
  pathImage: string,
  initCalcWidth: number,
  requiredFixHeight: number,
) {
  const sizes = pathImage.split('/').at(-1)?.split('x')

  const originalWidth = sizes![0] ? sizes![0] : initCalcWidth
  const originalHeight = sizes![1] ? sizes![1] : requiredFixHeight

  const reductionRatio = +originalHeight / requiredFixHeight

  return +originalWidth / reductionRatio
}
