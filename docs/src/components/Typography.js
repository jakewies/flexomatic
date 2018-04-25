import styled from 'styled-components'

export const Header1 = styled.h1`
  font-size: 4rem;
  line-height: 1.618;
`

export const Header2 = styled.h2`
  font-size: 2.5rem;
  line-height: 1.618;
`

export const TextItem = styled.span`
  line-height: 1.618;
  font-size: 1.2rem;
`

export const TextBlock = styled.p`
  line-height: 1.618;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

export const Code = styled.code`
  background: #eee;
  color: #000;
  padding: 4px;
  font-size: 1rem;
  font-family: Menlo, monospace;
`

export const Pre = styled.pre`
  background: #eee;
  padding: 8px;
  font-family: Menlo, monospace;
  font-size: 14px;
  margin-bottom: 1rem;
  line-height: 1.618;
  padding: ${props => props.inline && '15px'};
`
