import { updateCategory } from '@wordpress/blocks';
// import { addFilter } from '@wordpress/hooks';
import icon from './icon';
// import assign from 'lodash.assign';

updateCategory( 'content-design', { icon } );
//
// addFilter(
//   'blocks.getSaveContent.extraProps',
//   'content-design/do',
//   ( props ) => {
//     return assign( props, { style: { backgroundColor: 'red' } } )
//   }
// );
