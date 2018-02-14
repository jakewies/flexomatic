import React from 'react'
import { Cell } from '../src/'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Cell', () => {
  it('renders', () => {
    const tree = renderer.create(<Cell>Test Cell</Cell>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
