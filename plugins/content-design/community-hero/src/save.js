import {RichText} from '@wordpress/block-editor'
import {LinkControl} from '@wordpress/components'

const AttributesSave = (props) => {
  return <div>
    <div className={'community-hero-content'}>
    <h1>
      <RichText.Content tagName="span" value={props.attributes.titleWhite} />
      <RichText.Content tagName="span" className={'pink'} value={props.attributes.titlePink} />
    </h1>
    <RichText.Content tagName="p" value={props.attributes.content} />
      <a href={props.attributes.url}>{props.attributes.buttonText}</a>
    </div>
  </div>
};

export default AttributesSave;
