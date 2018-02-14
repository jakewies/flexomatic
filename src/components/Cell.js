import styled, { css } from 'styled-components'
import { align } from '../utils'
import { number, bool, node } from 'prop-types'

// Can I add defaultProps to make the resolution of some of these dynamic styles
// any easier?
// see: https://stackoverflow.com/questions/45977114/using-proptypes-and-defaultprops-for-a-styled-component
const Cell = styled.div`
  box-sizing: border-box;
  padding: 1em 0 0 1em;
  display: ${props => (props.flexed ? 'flex' : 'block')};
  align-self: ${props => align(props.align)};
  ${props => (props.width ? widthMixin : 'flex: 1')};
`

Cell.propTypes = {
  size: number,
  flexed: bool,
  children: node
}

// handles width of cell if passed as a prop
const widthMixin = css`
  width: ${props => width(props.width)};
  flex: none;
`

function width(n) {
  return `${n * 100}%`
}

export default Cell
