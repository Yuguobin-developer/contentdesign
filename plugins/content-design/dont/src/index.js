import { __ } from '@wordpress/i18n';
import { registerBlockType, createBlock } from '@wordpress/blocks';
// Import the element creator function (React abstraction layer)
import icon from './icon'
import edit from './edit'
import example from './example'
import save from './save'

registerBlockType( 'content-design/dont', {
  title: __( 'Don\'t', 'content-design' ),
  icon,
  category: 'content-design',
  example,
  edit,
  save,
  transforms: {
    // from: [
    //   {
    //     type: 'block',
    //     blocks: [ 'core/paragraph', 'core/lists' ], // wildcard - match any block
    //     transform: function( attributes, innerBlocks ) {
    //       return createBlock( 'content-design/dont', attributes, innerBlocks );
    //     },
    //   },
    // ],
    to: [
      {
        type: 'block',
        blocks: [ 'content-design/do' ],
        transform: function( attributes, innerBlocks ) {
          return createBlock( 'content-design/do', attributes, innerBlocks );
        },
      },
    ]
  }
} );

