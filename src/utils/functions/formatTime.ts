type Seconds = number | undefined

export const formatTime = (sec: Seconds, format: '00:00:00' | '00:00') => {
  if (sec === undefined || isNaN(sec)) return '0:00:00'

  const date = new Date(0, 0, 0)

  date.setSeconds(sec)

  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hourStr = hour < 10 ? `0${hour}` : hour
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds

  if (format === '00:00') {
    return hour ? `${hourStr}:${minutesStr}` : `${minutesStr}:${secondsStr}`
  }

  return `${hourStr}:${minutesStr}:${secondsStr}`
}

type TimeFormat = 'hh:mm:ss' | 'hh:mm' | 'mm:ss'
type Locale = string

export const setDescriptions = (
  time: string,
  timeFormat: TimeFormat,
  locale: Locale,
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
