export const formatTime = (time: number | undefined) => {
  if (time === undefined || isNaN(time)) return '0:00:00'

  const date = new Date(0, 0, 0)

  date.setSeconds(time)

  let hour: number | string = date.getHours()
  let minutes: number | string = date.getMinutes()
  let seconds: number | string = date.getSeconds()

  hour = hour < 10 ? `0${hour}` : hour
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds

  return `${hour}:${minutes}:${seconds}`
}
