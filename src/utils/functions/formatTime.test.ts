import { formatTime, setDescriptions } from './formatTime'

const secondsToMinutes = 100
const secondsToHour = 3720

describe('formatTime tests', () => {
  it('should return 00:00:00 by default', () => {
    const timeStr = formatTime(secondsToMinutes, '00:00:00')
    expect(timeStr).toBe('00:01:40')
  })

  it('should return 00:00 for minutes', () => {
    const timeStr = formatTime(secondsToMinutes, '00:00')
    expect(timeStr).toBe('01:40')
  })

  it('should return 00:00 for hour', () => {
    const timeStr = formatTime(secondsToHour, '00:00')
    expect(timeStr).toBe('01:02')
  })
})

describe('setDescriptions', () => {
  it('should return "0 ч. 00 мин." format', () => {
    const timeStr = setDescriptions('01:40', 'hh:mm', 'ru')
    expect(timeStr).toBe('1 ч. 40 мин.')
  })

  it('should return "0 min. 00 sec." format', () => {
    const timeStr = setDescriptions('01:40', 'mm:ss', 'en')
    expect(timeStr).toBe('1 min. 40 sec.')
  })

  it('should return "0 h. 0 min. 00 sec." format', () => {
    const timeStr = setDescriptions('01:40:50', 'hh:mm:ss', 'en')
    expect(timeStr).toBe('1 h. 40 min. 50 sec.')
  })

  it('should return "0 ч. 0 мин. 00 сек." format', () => {
    const timeStr = setDescriptions('01:00:50', 'hh:mm:ss', 'ru')
    expect(timeStr).toBe('1 ч. 0 мин. 50 сек.')
  })
})
