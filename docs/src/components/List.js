import styled from 'styled-components'

const UnorderedList = styled.ul`
  padding-left: ${props => props.pl && props.pl};
  margin-bottom: ${props => props.mb && props.mb};
`

const ListItem = styled.li`
  line-height: 1.618;
  font-size: 1.2rem;
`

export { UnorderedList, ListItem }
