export default {
  titleWhite: {
    type: 'string',
    selector: 'span',
    titleWhite: 'Content design'
  },
  titlePink: {
    type: 'string',
    selector: 'span',
    titlePink: 'makes it clear'
  },
  buttonText: {
    type: 'string',
    selector: 'a',
    default: 'Check the style guide'
  },
  content: {
    type: 'string',
    source: 'children',
    selector: 'p',
    default: 'Our mission is to power prosperity around the world. For content designers, that means we simplify the complex world of tax and accounting and relay it in a familiar tone that builds confidence.'
  },
  url: {
    type: 'string',
    selector: 'a',
    default: '/style-guide'
  }
}
