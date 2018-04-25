import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import slugify from '@sindresorhus/slugify'
import { SectionHeader, FancyLine } from './Section'
import { Header2 } from './Typography'
import { Grid, Cell, Demo } from '../../../src'

const scope = { Grid, Cell, Demo }

const Example = ({ example }) => {
  const slug = slugify(example.title)
  return (
    <ExampleContainer>
      <SectionHeader>
        <Header2 id={slug}>{example.title}</Header2>
        <FancyLine />
      </SectionHeader>
      <ExampleContent>
        <ReactMarkdown source={example.md} className="example__md" escapeHtml={false} />
        <LiveProvider code={example.code} scope={scope}>
          <LiveContainer>
            <LiveEditor />
            <LivePreview />
          </LiveContainer>
          <StyledError />
        </LiveProvider>
      </ExampleContent>
    </ExampleContainer>
  )
}

Example.propTypes = {
  example: object.isRequired
}

const ExampleContainer = styled.div`
  margin-bottom: 8rem;
`

const ExampleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
  }
`

const LiveContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  pre {
    overflow: auto;
  }

  .react-live-preview {
    border: 1px solid #eee;
    padding: 1em;
    min-height: 150px;
  }
`

const StyledError = styled(LiveError)`
  background: crimson;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  font-family: Menlo, monospace;

  @media (min-width: 900px) {
    width: 50%;
  }
`

export default Example
