import { describe, expect, test } from 'vitest'
import { extractWithHeughtFromUrl } from './image.util.ts'

describe('image-util', () => {
  test('extract 300x400', () => {
    const url = '22222-300x450.jpg'
    const { width, height } = extractWithHeughtFromUrl(url)
    expect(width).toBe(300)
    expect(height).toBe(450)
  })

  test('extract 2281x3082', () => {
    const url =
      'https://cdn.sanity.io/images/2uvu00qu/staging/005774a5e6d728ed950ac7786d397220bcd0fbf6-2281x3082.jpg?w=600'
    const { width, height } = extractWithHeughtFromUrl(url)
    expect(width).toBe(2281)
    expect(height).toBe(3082)
  })

  test('extract 3333x4444', () => {
    const url =
      'https://cdn.sanity.io/images/2uvu00qu/staging/005774a5e6d728ed950ac7786d397220bcd0fbf6-4444x3333.jpg?w=600'
    const { width, height } = extractWithHeughtFromUrl(url)
    expect(width).toBe(4444)
    expect(height).toBe(3333)
  })

  test('extract 2x3', () => {
    const url =
      'https://cdn.sanity.io/images/2uvu00qu/staging/005774a5e6d728ed950ac7786d397220bcd0fbf6-2x3.jpg?w=600'
    const { width, height } = extractWithHeughtFromUrl(url)
    expect(width).toBe(2)
    expect(height).toBe(3)
  })

  test('return zeroes as default', () => {
    const url = 'aldkjfladjf'
    const { width, height } = extractWithHeughtFromUrl(url)
    expect(width).toBe(0)
    expect(height).toBe(0)
  })
})
