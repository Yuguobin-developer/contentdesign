export default {
  content: {
    type: 'array',
    source: 'children',
    selector: 'p'
  },
  title: {
    type: 'string',
    selector: 'a',
    default: 'Learn more'
  },
  href: {
    type: 'string',
    default: '#'
  }
}
