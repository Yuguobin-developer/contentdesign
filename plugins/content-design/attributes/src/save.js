import {InnerBlocks, RichText} from '@wordpress/block-editor'
import classNames from 'classnames'

const AttributesSave = (props) => {
  return <div className={classNames([props.attributes.className, 'row'])}>
    <div className={'heading'}>
      <RichText.Content tagName="h3" value={props.attributes.content} />
    </div>
    <div className={'col'}>
      <InnerBlocks.Content/>
    </div>
  </div>
};

export default AttributesSave;
