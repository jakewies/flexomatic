import styled from 'styled-components'
import { number, bool } from 'prop-types'

const Cell = styled.div`
  display: ${props => (props.flexed ? 'flex' : 'block')};
  flex: 1;
  padding: 1em 0 0 1em;
  width: ${props => (props.size ? calcSize(props.size) : 'auto')};
`

Cell.propTypes = {
  size: number,
  flexed: bool
}

function calcSize(size) {
  return `${size * 100}%`
}

export default Cell
