import React from 'react'
import styled from 'styled-components'
import { Grid, Cell, Demo } from '../../../src'

const StyledGrid = styled(Grid)`
  width: 100%;
  max-width: 175px;
  margin: 0 auto;
`

const GridDemo = () => (
  <StyledGrid spacing="8px">
    <Cell width={0.6}>
      <Demo />
    </Cell>
    <Cell width={0.4}>
      <Demo />
    </Cell>
    <Cell width={0.33}>
      <Demo />
    </Cell>
    <Cell width={0.33}>
      <Demo />
    </Cell>
    <Cell width={0.33}>
      <Demo />
    </Cell>
    <Cell width={1}>
      <Demo />
    </Cell>
    <Cell width={0.25}>
      <Demo />
    </Cell>
    <Cell width={0.75}>
      <Demo />
    </Cell>
  </StyledGrid>
)

export default GridDemo
