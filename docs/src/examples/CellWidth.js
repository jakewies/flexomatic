const md = `
By default, all \`Cell\` components take up the same width in a \`Grid\`. But you can target each individually and manipulate its width using the \`width\` prop.

\`width\` takes a number **greater than 0 and less than or equal to 1**. It is then used to calculate the \`Cell\` width as a percentage of the \`Grid\` width.

The example shows 3 \`Cell\` components, each with a differing width of \`100%\`, \`75%\` and \`25%\` respectively.

### Using keywords

You are also able to pass any of the following string keywords to the \`width\` prop:

- \`'full'\`
- \`'half'\`
- \`'third'\`
- \`'fourth'\`

Add a keyword to one of the \`Cell\` components and see how it responds.
`

const code = `
<Grid>
  <Cell width={1}>
    <Demo>1</Demo>
  </Cell>
  <Cell width={3/4}>
    <Demo>2</Demo>
  </Cell>
  <Cell width={0.25}>
    <Demo>3</Demo>
  </Cell>
</Grid>
  
`
const CellWidth = { title: 'Cell Width', md, code }

export default CellWidth
