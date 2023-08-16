import {__} from '@wordpress/i18n'
import {InspectorControls, RichText, __experimentalLinkControl as LinkControl, URLInput, URLInputButton} from '@wordpress/block-editor'
import {TextControl} from '@wordpress/components'

const AttributesEdit = (props) => {
  const {setAttributes, className} = props
  const onChangeTitleWhiteContent = (newContent) => {
    setAttributes({titleWhite: newContent})
  }
  const onChangeTitlePinkContent = (newContent) => {
    setAttributes({titlePink: newContent})
  }
  const onChangeContent = (newContent) => {
    setAttributes({content: newContent})
  }
  const onChangeButtonText = (buttonText) => {
    setAttributes({buttonText: buttonText})
  }
  const onChangeUrl = (newContent) => {
    setAttributes({url: newContent})
  }
  return (
    <div>
    <div className={'community-hero-content'}>
    {
      <InspectorControls>
        <p>Attributes are used to list voice and tone elements.</p>
      </InspectorControls>
    }
      <h1>
        <RichText
          tagName="span"
          onChange={onChangeTitleWhiteContent}
          value={props.attributes.titleWhite}
          placeholder={__('White heading', 'content-design')}
          keepPlaceholderOnFocus={true}
          formattingControls={[]}
        />
        <RichText
          tagName="span"
          onChange={onChangeTitlePinkContent}
          value={props.attributes.titlePink}
          placeholder={__('pink heading', 'content-design')}
          keepPlaceholderOnFocus={true}
          className={'pink'}
          formattingControls={[]}
        />
      </h1>
      <RichText
        tagName="p"
        onChange={onChangeContent}
        value={props.attributes.content}
        placeholder={__('Enter blurb', 'content-design')}
        keepPlaceholderOnFocus={true}
        formattingControls={[]}
      />
      <RichText
        tagName="a"
        onChange={onChangeButtonText}
        value={props.attributes.buttonText}
        placeholder={__('Button text', 'content-design')}
        keepPlaceholderOnFocus={true}
        formattingControls={[]}
      />
      <div style={{color: '#fff', padding: '30px 0;'}}>Style guide url</div>
      <URLInput label="Style guide url"
                value={props.attributes.url}
                onChange={onChangeUrl}/>
    </div>
    </div>
  )
};

export default AttributesEdit;
