const md = `
The spacing between \`Cell\` components in a grid can be thought of as "gutters". The default size for these gutters in \`flexomatic\` is \`'1em'\`. This value can be overriden using the \`spacing\` prop on the \`Grid\` component.

\`spacing\` takes a string value such as \`'1em'\` or \`'25px'\`.
`

const code = `
<Grid spacing="25px">
  <Cell>
    <Demo>1</Demo>
  </Cell>
  <Cell>
    <Demo>2</Demo>
  </Cell>
  <Cell>
    <Demo>3</Demo>
  </Cell>
</Grid>
  
`
const GridSpacing = { title: 'Grid Spacing', md, code }

export default GridSpacing
