import {__} from '@wordpress/i18n'

import {registerBlockType, getBlockDefaultClassName} from '@wordpress/blocks'
import {InspectorControls, PostFeaturedImage} from '@wordpress/block-editor'
import {TextControl, SelectControl, Panel, PanelBody, PanelRow} from '@wordpress/components'
import attributes from './attributes'
import icon from './icon'
import Icon from './chevron';
//http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/
registerBlockType('content-design/link', {
  title: 'Link',
  attributes,
  icon,
  category: 'content-design',
  example: {
    attributes: {
      selectedPost: 99
    }
  },
  edit: ({attributes, setAttributes, className}) => {

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
    },
  save: ({attributes}) => {
    const href = attributes.href.replace(/\/+$/, "")
    return <div className={attributes.className}>
      <a href={href}>{attributes.title} <Icon fill={'#C9007A'} /></a>
    </div>
  }
})
