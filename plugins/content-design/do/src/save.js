import {InnerBlocks} from '@wordpress/block-editor'
import Style from './style'

const DoSave = () => {
  return <div>
    <img src={do_block.image} style={Style.img} />
    <InnerBlocks.Content/>
  </div>;
};

export default DoSave;
