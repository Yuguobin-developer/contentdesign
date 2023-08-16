import { __ } from '@wordpress/i18n';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import icon from './icon.js'
import edit from './edit'
import example from './example'
import save from './save'

registerBlockType( 'content-design/do', {
  title: __( 'Do', 'content-design' ),
  icon,
  category: 'content-design',
  example,
  edit,
  save,
  transforms: {
    from: [
      {
        type: 'block',
        blocks: [ 'core/paragraph', 'core/lists' ], // wildcard - match any block
        transform: function( attributes, innerBlocks ) {
          return createBlock( 'content-design/do', attributes, innerBlocks );
        },
      },
    ],
    to: [
      {
        type: 'block',
        blocks: [ 'content-design/mini-hr' ],
        transform: function( attributes, innerBlocks ) {
          return createBlock( 'content-design/mini-hr', attributes, innerBlocks );
        },
      },
    ]
  }
} );

