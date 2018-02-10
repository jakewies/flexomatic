import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -1em 0 1em -1em;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Grid
