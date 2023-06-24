import { capitaliseStr, capitaliseArr } from './capitalise'

describe('capitalise tests', () => {
  describe('capitaliseStr tests', () => {
    it('should return capitalise rus word', () => {
      const input = 'русский'
      const res = 'Русский'
      const output = capitaliseStr(input)

      expect(output).toBe(res)
    })

    it('should return capitalise eng word', () => {
      const input = 'english'
      const res = 'English'
      const output = capitaliseStr(input)

      expect(output).toBe(res)
    })
  })

  describe('capitaliseArr tests', () => {
    it('should return capitalise rus words', () => {
      const input = ['русский', 'английский']
      const res = ['Русский', 'Английский']
      const output = capitaliseArr(input)

      expect(output).toEqual(res)
    })

    it('should return capitalise rus words', () => {
      const input = ['russian', 'english']
      const res = ['Russian', 'English']
      const output = capitaliseArr(input)

      expect(output).toEqual(res)
    })
  })
})
