import { formatToMonthName } from './formatToMonthName'

const date = '2023-05-08T07:30:59.761Z'

describe('formatToMonthName tests', () => {
  it('should return "8 мая 2023" on ru locale', () => {
    const dateStr = formatToMonthName(date, 'ru')
    expect(dateStr).toBe('8 мая 2023')
  })

  it('should return "May 8, 2023" on en locale', () => {
    const dateStr = formatToMonthName(date, 'en')
    expect(dateStr).toBe('May 8, 2023')
  })
})
