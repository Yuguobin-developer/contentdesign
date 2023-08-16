export default {
  mediaID: {
    type: 'number',
  },
  mediaURL: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src',
  }
}
