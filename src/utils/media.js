const screenSizes = {
  base: 320,
  tablet: 768,
  desktop: 1024,
}

const media = Object.keys(screenSizes).reduce(function(accum, size) {
  accum[size] = size === 'base'
    ? style => `${style};`
    : style => `
      @media (min-width: ${screenSizes[size]}px) {
        ${style};
      }
    `
  return accum
}, {})

export default media
