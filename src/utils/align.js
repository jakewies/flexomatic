export default function align(position) {
  switch (position) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'end'
    case 'baseline':
      return 'baseline'
    default:
      return 'stretch'
  }
}
