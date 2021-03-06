import styled from 'styled-components'
import Cell from './Cell'
import { align } from '../utils'
import { string } from 'prop-types'

// The Grid component adapts its styles based on a few different props.
// Some props are not required such as direction and align. If these props are
// not passed then the component will not generate styles for flex-direction and align-items.
const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => align[props.align]};
  flex-wrap: wrap;
  list-style: none;
  margin: ${props =>
    props.spacing ? `-${props.spacing} 0 ${props.spacing} -${props.spacing}` : '-1em 0 1em -1em'};
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }

  & ${Cell} {
    ${props => props.flexCells && 'display: flex;'};
    padding: ${props => (props.spacing ? `${props.spacing} 0 0 ${props.spacing}` : '1em 0 0 1em')};
  }
`

Grid.propTypes = {
  flexCells: string,
  direction: string,
  align: string,
  spacing: string
}

export default Grid
