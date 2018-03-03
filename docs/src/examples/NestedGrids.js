const md = `
The \`Grid\` component is fully nestable. \`Grids\` in \`Grids\` in \`Grids\`. Not much to say here. Go wild kids!
`

const code = `
<Grid>
  <Cell>
    <Demo>
      <Grid>
        <Cell>
          <Demo>1</Demo>
        </Cell>
        <Cell>
          <Demo>2</Demo>
        </Cell>
      </Grid>
    </Demo>
  </Cell>
  <Cell>
    <Demo>3</Demo>
  </Cell>
  <Cell>
    <Demo>4</Demo>
  </Cell>
</Grid>
  
`
const NestedGrids = { title: 'Nested Grids', md, code }

export default NestedGrids
