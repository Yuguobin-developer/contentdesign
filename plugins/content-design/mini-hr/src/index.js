import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import icon from './icon'
import edit from './edit'
import save from './save'

registerBlockType( 'content-design/mini-hr', {
  title: __( 'Mini Separator', 'content-design' ),
  icon,
  category: 'content-design',
  example: {},
  edit,
  save
} );

