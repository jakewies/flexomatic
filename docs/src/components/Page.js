import React from 'react'
import { node, string, bool, array } from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import GridDemo from './GridDemo'

const Page = ({ children, childrenMaxWidth, darkHeader, routes }) => (
  <div>
    <Header routes={routes} darkMode={darkHeader} />
    <Main maxWidth={childrenMaxWidth}>{children}</Main>
    <Footer>
      <GridDemo />
    </Footer>
  </div>
)

Page.propTypes = {
  children: node.isRequired,
  childrenMaxWidth: string.isRequired,
  darkHeader: bool.isRequired,
  routes: array.isRequired
}

Page.defaultProps = {
  childrenMaxWidth: '1000px',
  darkHeader: false
}

const Main = styled.main`
  padding: 4rem 2rem 0;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 4rem;
`

export default Page
