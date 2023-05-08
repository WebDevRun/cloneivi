export const formatToMonthName = (date: string, locale: string) => {
  const tempDate = new Date(date)
  const dateStr = tempDate.toLocaleString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return locale === 'ru' ? dateStr.slice(0, -3) : dateStr
}
