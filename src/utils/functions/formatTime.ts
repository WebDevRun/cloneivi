type Seconds = number | undefined
type Locale = 'ru' | 'en'

export const formatTime = (
  sec: Seconds,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions
) => {
  if (sec === undefined || isNaN(sec)) return '0:00:00'

  const date = new Date(0, 0, 0)

  date.setSeconds(sec)

  const formatTime = date.toLocaleTimeString(locale, options)

  return formatTime
}

type TimeFormat = 'hh:mm:ss' | 'hh:mm' | 'mm:ss'

export const setDescriptions = (
  time: string,
  timeFormat: TimeFormat,
  locale: Locale
) => {
  const timeArray = time
    .split(':')
    .map((value) => (value[0] === '0' ? value.slice(1) : value))

  if (timeFormat === 'hh:mm') {
    const [h, m] = timeArray
    const hour = locale === 'ru' ? `${h} ч.` : `${h} h.`
    const minutes = locale === 'ru' ? `${m} мин.` : `${m} min.`

    return `${hour} ${minutes}`
  }

  if (timeFormat === 'mm:ss') {
    const [m, s] = timeArray
    const minutes = locale === 'ru' ? `${m} мин.` : `${m} min.`
    const seconds = locale === 'ru' ? `${s} сек.` : `${s} sec.`

    return `${minutes} ${seconds}`
  }

  if (timeFormat === 'hh:mm:ss') {
    const [h, m, s] = timeArray
    const hour = locale === 'ru' ? `${h} ч.` : `${h} h.`
    const minutes = locale === 'ru' ? `${m} мин.` : `${m} min.`
    const seconds = locale === 'ru' ? `${s} сек.` : `${s} sec.`

    return `${hour} ${minutes} ${seconds}`
  }
}
