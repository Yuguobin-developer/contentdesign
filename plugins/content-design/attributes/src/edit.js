import {__} from '@wordpress/i18n'
import {InnerBlocks, InspectorControls} from '@wordpress/block-editor'
import {RichText} from '@wordpress/block-editor'
import classNames from 'classnames'

const AttributesEdit = (props) => {
  const {setAttributes, className} = props
  const onChangeAttibuteContent = (newContent) => {
    setAttributes({content: newContent})
  }
  return (
    <div className={classNames(className,'row')}>
      {
        <InspectorControls>
          <p>Attributes are used to list voice and tone elements.</p>
        </InspectorControls>
      }
      <div className={'heading'}>
        <RichText
          tagName="h3"
          onChange={onChangeAttibuteContent}
          value={props.attributes.content}
          placeholder={__('enter heading', 'content-design')}
          keepPlaceholderOnFocus={true}
        />
      </div>
      <div className={'col'}>
        <InnerBlocks/>
      </div>
    </div>
  )
};

export default AttributesEdit;
