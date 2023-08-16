export default {
  attributes: {
    titleWhite: {
      type: 'string',
      selector: 'span'
    },
    titlePink: {
      type: 'string',
      selector: 'span'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: 'p',
    },
    button: {
      type: 'string',
      selector: 'a'
    },
    link: {
      type: 'string',
      selector: 'a'
    }
  }
}
