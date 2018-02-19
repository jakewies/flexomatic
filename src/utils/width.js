import media from './media'

// process values received by width prop into
// media queries describing a component's width at a given
// screen size
const width = n =>
  resolve(asArray(n))
    .map((w, i) => format(w, screenMappings[i]))
    // In order to account for CSS specificity the widths array
    // must be reversed so that the widths for smaller screenSizes
    // are being processed first. If they were being processed last
    // they would exist further down the cascade, creating specificty
    // issues
    .reverse()
    .join('')

const resolve = widths => {
  // No more than 3 width values can be passed to a component, 1 for each
  // screen size. If a width value is passed for more than 1 screen size (default desktop),
  // then they must be passed in an array of length 3 or less.
  if (widths.length > 3) {
    throw new Error(
      'Width prop received array of length greater than 3. Width prop does not accept arrays with length greater than 3.'
    )
  }
  // Calculate percentage width for each value the width prop receives
  // and return as array
  return widths.map(w => {
    try {
      // Handle keywords
      if (typeof w === 'string' || w instanceof String) {
        if (keywords.hasOwnProperty(w)) {
          return keywords[w]
        } else {
          throw `Width prop received invalid value ${w}`
        }
      }
      // Handle numbers
      // If the passed width value is greater than 1 return an error. Since the width API
      // returns a percentage width for numbers passed to the API, having a number greater than
      // 1 means having a width percentage for a given component greater than 100%.
      if (w > 1 || w <= 0) {
        throw `Width prop received a value of ${w}. Width prop does not accept values greater than 1 or less than or equal to 0.`
      }
      return `${w * 100}%`
    } catch (err) {
      throw new Error(err)
    }
  })
}

const asArray = n => (Array.isArray(n) ? n : [n])

const format = (val, size) => media[size](`width: ${val}`)

// Get index values of mediaQueries
// The screenMappings object, which allows for precise
// styling for each screen size, is implicitly dependent on the
// media utility's structure. A change to the media object
// could break screenMappings. Consider a better way
const screenMappings = Object.keys(media)

const keywords = {
  full: '100%',
  half: '50%',
  third: '33.33%',
  fourth: '25%'
}

export { width as default, resolve, format }
