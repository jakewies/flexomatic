import React from 'react'
import { array, bool } from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = ({ routes, dark }) => (
  <StyledNav>
    {routes.map((route, i) => (
      <Link href={`/${route !== 'Home' ? route.toLowerCase() : ''}`} key={i}>
        <a style={dark ? withColor(linkStyles, '#f8f8ff') : linkStyles}>
          {route.length ? route : 'Home'}
        </a>
      </Link>
    ))}

    <Link href="https://github.com/jakewies/flexomatic">
      <a style={dark ? withColor(linkStyles, '#f8f8ff') : linkStyles}>GitHub</a>
    </Link>
  </StyledNav>
)

Nav.propTypes = {
  routes: array.isRequired,
  dark: bool
}

const StyledNav = styled.nav`
  padding-top: 2.75rem;
  a {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: inline-block;
    width: 75px;
  }
`

const linkStyles = {
  color: '#4801FF',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 600
}

const withColor = (styles, color) => Object.assign({}, styles, { color })

export default Nav
