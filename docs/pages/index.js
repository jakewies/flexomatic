import React from 'react'
import Link from 'next/link'
import {
  Page,
  Section,
  UnorderedList,
  ListItem,
  TextBlock,
  Code,
  FancyLink
} from '../src/components'

const navRoutes = ['Docs']

const Home = () => (
  <Page routes={navRoutes} childrenMaxWidth="1400px">
    <Section title="Motivation">
      <TextBlock>
        <Code>flexomatic</Code> aims to be a very simple, lightweight grid system with a flexible
        API that allows you to get up and running in seconds. It is based on the methodology
        proposed in{' '}
        <FancyLink href="https://philipwalton.github.io/solved-by-flexbox/demos/grids/">
          Solved by Flexbox
        </FancyLink>, where the goal is to expose a minimal grid system that doesn&#39;t weigh the
        user down with a multitude of options.
      </TextBlock>
    </Section>
    <Section title="Features">
      <UnorderedList pl="36px">
        <ListItem>
          Each <Code>Cell</Code> component is the same width by default
        </ListItem>
        <ListItem>
          Full control over individual <Code>Cell</Code> components, including width and alignment
        </ListItem>
        <ListItem>Responsive, with media query support</ListItem>
        <ListItem>Nested Grids</ListItem>
      </UnorderedList>
    </Section>
    <Section title="Getting Started">
      <UnorderedList pl="36px" mb="1rem">
        <ListItem>
          Make sure <Code>styled-components</Code> is installed in your project
        </ListItem>
        <ListItem>
          <Code>yarn add flexomatic</Code>
        </ListItem>
        <ListItem>
          See the{' '}
          <Link href="/docs">
            <a style={fancyNextLinkStyles}>docs</a>
          </Link>{' '}
          for examples and usage! 🚀
        </ListItem>
      </UnorderedList>
    </Section>
  </Page>
)

const fancyNextLinkStyles = {
  borderBottom: '2px solid #000',
  color: '#000',
  textDecoration: 'none',
  paddingBottom: '2px'
}

export default Home
