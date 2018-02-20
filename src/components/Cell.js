import styled, { css } from 'styled-components'
import { align, width } from '../utils'
import { string, number, array, bool, node, oneOfType } from 'prop-types'

// Can I add defaultProps to make the resolution of some of these dynamic styles
// any easier?
// see: https://stackoverflow.com/questions/45977114/using-proptypes-and-defaultprops-for-a-styled-component
const Cell = styled.div`
  box-sizing: border-box;
  padding: 1em 0 0 1em;
  display: ${props => (props.flexed ? 'flex' : 'block')};
  align-self: ${props => align[props.align]};
  ${props => (props.width && props.width !== 'auto' ? widthMixins.custom : widthMixins.default)};
`

Cell.propTypes = {
  align: string,
  children: node,
  flexed: bool,
  width: oneOfType([number, string, array])
}

const widthMixins = {
  default: css`
    width: auto;
    flex: 1;
  `,
  custom: css`
    ${props => width(props.width)};
    flex: none;
  `
}

export default Cell
