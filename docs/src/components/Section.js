import React from 'react'
import styled from 'styled-components'
import { string, node } from 'prop-types'
import { Header2 } from './Typography'

const Section = props => (
  <StyledSection>
    <SectionHeader>
      <Header2>{props.title}</Header2>
      <FancyLine />
    </SectionHeader>
    {props.children}
  </StyledSection>
)

Section.propTypes = {
  title: string.isRequired,
  children: node.isRequired
}

const StyledSection = styled.div`
  max-width: 700px;
  margin-bottom: 50px;
`

const SectionHeader = styled.div`
  margin-bottom: 20px;
`

const FancyLine = styled.div`
  max-width: 350px;
  height: 4px;
  background-image: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
`

export { SectionHeader, FancyLine }
export default Section
