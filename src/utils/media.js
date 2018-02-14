const screenSizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 320
}

// WORKING AS WELL WITH NO CSS API
const media = Object.keys(screenSizes).reduce(function(accum, size) {
  accum[size] = style => `
    @media (min-width: ${screenSizes[size]}px) {
      ${style};
    }
  `
  return accum
}, {})

export default media
