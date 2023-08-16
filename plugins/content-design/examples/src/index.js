import {registerBlockType} from '@wordpress/blocks'
import attributes from './attributes'
import edit from './edit'
import example from './example'
import icon from './icon'
import save from './save'

registerBlockType('content-design/examples', {
  attributes,
  title: 'Examples',
  icon,
  category: 'content-design',
  example,
  edit,
  save
})
