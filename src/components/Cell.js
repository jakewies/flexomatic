import React from 'react'
import styled from 'styled-components'
import { number, bool, node } from 'prop-types'

export default function Cell(props) {
  const dynamicStyles = getDynamicStyles(props)
  const styles = generateStyles(defaultStyles, dynamicStyles)
  const Component = styled.div`
    ${styles};
  `
  return <Component>{props.children}</Component>
}

Cell.propTypes = {
  size: number,
  flexed: bool,
  children: node
}

const defaultStyles = {
  'box-sizing': 'border-box',
  display: 'block',
  flex: 1,
  padding: '1em 0 0 1em',
  width: 'auto'
}

function getDynamicStyles(options) {
  const { flexed, size } = options
  const styles = {}

  if (flexed) {
    styles.display = 'flex'
  }

  if (size) {
    styles.width = calcSize(size)
    styles.flex = 'none'
  }

  return styles
}

function generateStyles(defaultStyles, dynamicStyles) {
  const stylesAsObj = Object.assign({}, defaultStyles, dynamicStyles)
  return convertStylesToTemplateLiteral(stylesAsObj)
}

function convertStylesToTemplateLiteral(styles) {
  return Object.keys(styles)
    .reduce((accum, key) => `${accum} ${key}: ${styles[key]};`, ``)
    .trim()
}

function calcSize(size) {
  return `${size * 100}%`
}
