const md = `
The current version of \`flexomatic\` has a small API, only exposing two components at the moment:

### Grid

The \`Grid\` component initializes a grid section of your UI. Think of it as a \`row\` in bootstrap. It takes any number of \`Cell\` components as its child.


### Cell

The \`Cell\` component renders individual columns of your grid. Each \`Cell\` takes up the same width by default.

Add another \`Cell\` component and see how the grid adapts. Click **Next** when you're ready to move on.

_Note: The \`Demo\` component is used for example purposes. Include it as a child of your new \`Cell\`._
`

const code = `
  <Grid>
    <Cell>
      <Demo>1</Demo>
    </Cell>
    <Cell>
      <Demo>2</Demo>
    </Cell>
  </Grid>
  
`
const Grid = { title: 'Introduction', md, code }

export default Grid
