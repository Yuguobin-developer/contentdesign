import {InnerBlocks} from '@wordpress/block-editor'
import Style from './style'

const DoSave = ( props ) => {
  return <div>
    <img src={dont_block.image} style={Style.img} />
    <InnerBlocks.Content/>
  </div>;
};

export default DoSave;
