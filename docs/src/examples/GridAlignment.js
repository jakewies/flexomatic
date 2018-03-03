const md = `
  Grid alignment may come in to play if the heights of your \`Cell\` components differ. If you need control over grid alignment you can use the \`align\` prop.

  \`align\` is an optional prop that takes takes any of the following values:

  - \`start\`
  - \`center\`
  - \`end\` 
  - \`baseline\`
`

const code = `
<Grid align="center">
  <Cell>
    <Demo>A bunch of nonsense text content to grow the height of this Cell muahaha!</Demo>
  </Cell>
  <Cell>
    <Demo>A medium amount of text content to grow this Cell.</Demo>
  </Cell>
  <Cell>
    <Demo>No respect!</Demo>
  </Cell>
</Grid>
  
`
const GridAlignment = { title: 'Grid Alignment', md, code }

export default GridAlignment
