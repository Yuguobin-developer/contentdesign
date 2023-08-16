import {InnerBlocks, RichText} from '@wordpress/block-editor'
import classNames from 'classnames'

const ExamplesSave = (props) => {
  return <div className={classNames([props.attributes.className, 'row'])}>
    <div className={'heading'}>
      <h3>Example{(props.attributes.plural === 'plural') ? 's' : ''}</h3>
    </div>
    <div className={'col'}>
      <InnerBlocks.Content/>
    </div>
  </div>
};

export default ExamplesSave;
