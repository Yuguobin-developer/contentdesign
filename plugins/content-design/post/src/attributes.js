export default {
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p',
    },
    title: {
      type: 'string',
      selector: 'h2'
    },
    link: {
      type: 'string',
      selector: 'a'
    },
    selectedPost: {
      type: 'number',
      default: 0,
    }
  }
}
