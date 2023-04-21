type Time = number | undefined
interface options {
  format?: 'hh:mm:ss' | 'hh:mm'
}

export function formatTime(time: Time, options?: options) {
  if (time === undefined || isNaN(time)) return '0:00:00'

  const date = new Date(0, 0, 0)

  date.setSeconds(time)

  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const hourStr = hour < 10 ? `0${hour}` : hour
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds

  if (options?.format === 'hh:mm') {
    if (hour) return `${hourStr}:${minutesStr}`

    return `${minutesStr}:${secondsStr}`
  }

  return `${hourStr}:${minutesStr}:${secondsStr}`
}
