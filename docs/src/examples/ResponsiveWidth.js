const md = `
  \`flexomatic\` supports multiple \`Cell\` widths at different screen sizes. At the moment, these screen sizes are:

  - *Desktop*: \`max-width: 1024px\`
  - *Tablet*: \`max-width: 768px\`
  - *Base*: \`min-width: 767px\`


You can size \`Cell\` components at each breakpoint by passing an array of numbers or keywords with the signature:

\`[base, tablet, desktop]\`

Play around with different width configurations and resize the browser to see the \`Cell\` components adapt.

`

const code = `
<Grid>
  <Cell width={[1, 0.5, 0.25]}>
    <Demo>1</Demo>
  </Cell>
  <Cell width={['full', 1/2, 'fourth']}>
    <Demo>2</Demo>
  </Cell>
  <Cell width={[1, 'half', 1/4]}>
    <Demo>3</Demo>
  </Cell>
</Grid>
  
`
const ResponsiveWidth = { title: 'Media Queries', md, code }

export default ResponsiveWidth
