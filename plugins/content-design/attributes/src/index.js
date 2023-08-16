import {registerBlockType} from '@wordpress/blocks'
import attributes from './attributes'
import edit from './edit'
import example from './example'
import icon from './icon'
import save from './save'

registerBlockType('content-design/attributes', {
  title: 'Resource',
  icon,
  category: 'content-design',
  attributes,
  example,
  edit,
  save
})
