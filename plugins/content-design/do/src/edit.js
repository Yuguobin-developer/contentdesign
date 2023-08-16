import {InnerBlocks} from '@wordpress/block-editor'
import Style from './style'

const DoEdit = ( props ) => {
    const { setAttributes, className } = props;
    return (
      <div>
        <img src={do_block.image} style={Style.img} />
        <InnerBlocks/>
      </div>
    );
};

export default DoEdit;
