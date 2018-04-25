const md = `
You can adjust the direction of the grid using the \`direction\` prop. \`direction\` is an optional prop, which can take any of the following values:

- \`row\` (_default_)
- \`row-reverse\`
- \`column\`
- \`column-reverse\`

Try adding any of these values to the \`direction\` prop on the \`Grid\` and watch how the UI changes.
`

const code = `
<Grid direction="row">
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
const GridDirection = { title: 'Grid Direction', md, code }

export default GridDirection
