const md = `
There are certain situations where you will want to have control over the height of a \`Cell\`. This can be achieved in a few ways.

- If you want every \`Cell\` to have the same height, add the \`flexCells\` prop to the \`Grid\` parent. \`flexCells\` is an optional boolean prop type with a default value of \`false\`.

- To manipulate the height of a single \`Cell\` component, add the \`flexed\` prop to the \`Cell\`. \`flexed\` is also an optional boolean prop type with a default value of \`false\`.
`

const code = `
<Grid flexCells={false}>
  <Cell>
    <Demo>A bunch of nonsense text content to grow the height of this Cell muahaha!</Demo>
  </Cell>
  <Cell>
    <Demo>2</Demo>
  </Cell>
  <Cell flexed>
    <Demo>3</Demo>
  </Cell>
</Grid>
  
`
const CellHeight = { title: 'Cell Height', md, code }

export default CellHeight
