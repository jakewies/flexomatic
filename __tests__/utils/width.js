import width, { resolve, format } from '../../src/utils/width'

describe('width utility', () => {
  it('resolves width when given a number', () => {
    const result = resolve([1 / 2])
    expect(result).toEqual(['50%'])
  })

  it('resolves width when given a keyword', () => {
    const result = resolve(['half'])
    expect(result).toEqual(['50%'])
  })

  it('resolves width when given an array of numbers', () => {
    const result = resolve([1 / 4, 1 / 2, 1])
    expect(result).toEqual(['25%', '50%', '100%'])
  })

  it('resolves width when given an array of keywords', () => {
    const result = resolve(['fourth', 'half', 'full'])
    expect(result).toEqual(['25%', '50%', '100%'])
  })

  it('resolves width when given a mixed array of numbers and keywords', () => {
    const result = resolve(['fourth', 1 / 2, 'full'])
    expect(result).toEqual(['25%', '50%', '100%'])
  })

  it('formats resolved width into media query for given screen size', () => {
    const result = format('50%', 'desktop')
    expect(result).toMatchSnapshot()
  })

  it('throws when width prop receives array greater than 3', () => {
    expect(() => width([1, 2, 3, 4])).toThrow()
  })

  it('throws when width prop receives a number value greater than 1', () => {
    expect(() => width(2)).toThrow()
  })

  it('throws when width prop receives a number less than or equal to 0', () => {
    expect(() => width(0)).toThrow()
  })

  it('throws when width prop receives an unknown keyword', () => {
    const keyword = 'test'
    expect(() => width(keyword)).toThrow()
  })
})
