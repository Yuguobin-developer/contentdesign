import {PanelBody, TextControl} from '@wordpress/components'
import Icon from './chevron'

const DoEdit = ({attributes, setAttributes, className}) => {

  // const setSelectedTarget = (target) => {
  //   setAttributes({target})
  // }
  const setTitle = (title) => {
    setAttributes({title})
  }
  const setHref = (href) => {
    setAttributes({href})
  }
  let options = [{
    value: '_self',
    label: 'Open link in the same window',
    selected: ('_self' === attributes.target)
  },{
    value: '_blank',
    label: 'Open link in a new window',
    selected: ('_blank' === attributes.target)
  }]

  return <div className={className}>
    {
      <InspectorControls>
        <PanelBody
          title={'Link'}
          initialOpen={true}>
          <div>
            <TextControl
              value={attributes.title}
              label={__('Title')}
              options={options}
              onChange={setTitle}/>
          </div>
          <div>
            <TextControl
              value={attributes.href}
              label={__('Href')}
              options={options}
              onChange={setHref}/>
          </div>
        </PanelBody>
      </InspectorControls>
    }
    <a href={attributes.href}>{attributes.title} <Icon fill={'#C9007A'} /></a>
  </div>
}

export default DoEdit;
