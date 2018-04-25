import React from 'react'
import { bool, array } from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import { TextBlock, Header1 } from './Typography'
import FancyLink from './FancyLink'
import Nav from './Nav'

const Header = ({ routes, darkMode }) => (
  <HeaderContainer dark={darkMode}>
    <HeaderInner>
      <TitleContainer>
        <Title>
          <Link href="/">
            <a>flexomatic.</a>
          </Link>
        </Title>
        <TextBlock>
          A flexbox-based grid system for React built with{' '}
          <FancyLink href="https://www.styled-components.com/">styled-components</FancyLink>.
        </TextBlock>
      </TitleContainer>
      <Nav dark={darkMode} routes={routes} />
    </HeaderInner>
  </HeaderContainer>
)

Header.propTypes = {
  darkMode: bool,
  routes: array.isRequired
}

const HeaderContainer = styled.header`
  background-color: ${props => (props.dark ? 'black' : 'transparent')};

  & ${Title} a {
    color: ${props => (props.dark ? '#f8f8ff' : '#000')};
  }

  & ${TextBlock} {
    color: ${props => (props.dark ? '#f8f8ff' : '#000')};
  }

  & ${FancyLink} {
    border-bottom-color: ${props => (props.dark ? '#f8f8ff' : '#000')};
  }
`

const HeaderInner = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TitleContainer = styled.div`
  max-width: 400px;
`

const Title = Header1.extend`
  a {
    text-decoration: none;
  }
`

export default Header
