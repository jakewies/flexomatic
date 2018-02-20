import React from 'react'
import { Cell } from '../../src/'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Cell', () => {
  it('renders', () => {
    const tree = renderer.create(<Cell>Test Cell</Cell>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with proper width', () => {
    const tree = renderer.create(<Cell width={1 / 2}>Test</Cell>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with multiple widths', () => {
    const tree = renderer.create(<Cell width={[1, 'half', 0.25]}>Test</Cell>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
