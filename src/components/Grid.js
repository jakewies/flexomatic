import styled from 'styled-components'

const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -1em 0 1em -1em;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Grid
