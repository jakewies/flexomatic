import styled from 'styled-components'
import Cell from './Cell'
import { align } from '../utils'

const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: ${props => align(props.align)};
  flex-wrap: wrap;
  list-style: none;
  margin: -1em 0 1em -1em;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }

  & ${Cell} {
    ${props => props.flexCells && 'display: flex;'};
  }
`

export default Grid
