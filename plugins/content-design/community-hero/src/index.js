import {registerBlockType} from '@wordpress/blocks'
import attributes from './attributes'
import example from './example'
import icon from './icon'
import edit from './edit'
import save from './save'
//http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/
registerBlockType('content-design/community-hero', {
  title: 'Community hero',
  attributes,
  icon,
  category: 'content-design',
  example,
  edit,
  save
})
