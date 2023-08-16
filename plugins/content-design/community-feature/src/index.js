import {__} from '@wordpress/i18n'

import {registerBlockType, getBlockDefaultClassName} from '@wordpress/blocks'
import {InspectorControls, PostFeaturedImage} from '@wordpress/block-editor'
import {SelectControl, Panel, PanelBody, PanelRow, ColorPicker, ToggleControl} from '@wordpress/components'
import {withSelect} from '@wordpress/data'

import classNames from 'classnames'
import icon from './icon'
//http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/
registerBlockType('content-design/community-feature', {
  title: 'Community feature',
  attributes: {
    title: {
      type: 'string',
      selector: 'h2'
    },
    link: {
      type: 'string',
      selector: 'a'
    },
    color: {
      type: 'string',
      default: '#ffffff'
    },
    alignRight: {
      type: 'boolean',
      default: false
    },
    selectedPost: {
      type: 'number',
      default: 0
    }
  },
  icon,
  category: 'content-design',
  example: {
    attributes: {
      selectedPost: 99
    }
  },
  edit: withSelect((select, props) => {
    const {getMedia} = select('core')
    const selectedPost = props.attributes.selectedPost
    const query = {
      categories: post_block.category_id
    }
    // console.log('post_block.category_id', post_block.category_id)
    const posts = select('core').getEntityRecords('postType', 'post', query)
    const post = (posts) ? posts.find(({id}) => id === parseInt(selectedPost)) : null
    const media = (post && post.featured_media) ? getMedia(post.featured_media) : null

    return {
      posts,
      post,
      media
    }
  })(({posts, post, media, attributes, setAttributes, className}) => {

      const setSelectedPost = (selectedPost) => {
        setAttributes({selectedPost: parseInt(selectedPost)})
      }
    const setBackgroundColor = (backgroundColor) => {
      console.log('backgroundColor', backgroundColor.hex)
      setAttributes({color: backgroundColor.hex})
    }
    const setAlignLeft = (alignRight) => {
      console.log('alignRight', alignRight)
      setAttributes({alignRight: !alignRight})
    }
      if (!posts) {
        return 'Loading...'
      }
      if (posts && posts.length === 0) {
        return 'No posts '
      }
      let options = posts.map(post => {

        return {
          value: post.id,
          label: post.title.rendered,
          selected: (post.id === parseInt(attributes.selectedPost))
        }
      })
      options.unshift({value: 0, label: __('Select a Post')})
      const title = (post) ? post.title.rendered : 'Select post from sidebar';
      const body = (post) ? post.content.rendered : 'This block has no content. To select a post open the sidebar using the sproket, click \'Block\' then select a post from the dropdown.';
      const backgroundImage = (media && media.source_url) ? media.source_url : '';
      return <div className={className}>
        {
          <InspectorControls>
            <PanelBody
              title={'Content'}
              initialOpen={true}>
              <PanelRow>
                <SelectControl
                  value={attributes.selectedPost}
                  label={__('Select a Post')}
                  options={options}
                  onChange={setSelectedPost}/>
              </PanelRow>
              <PanelRow>
                Background color
              </PanelRow>
              <PanelRow>
                <ColorPicker
                  label={'Background color'}
                  color={ attributes.color }
                  onChangeComplete={setBackgroundColor}
                  disableAlpha
                />
              </PanelRow>
              <PanelRow>
                Image alignment
              </PanelRow>
              <PanelRow>
                <ToggleControl
                  label={ attributes.alignRight ? 'Align right' : 'Align left' }
                  checked={ attributes.alignRight }
                  onChange={() => {setAttributes({alignRight: !attributes.alignRight})}}
                />
              </PanelRow>
            </PanelBody>

          </InspectorControls>
        }
        <div className={classNames('community-feature', { 'community-feature-right': attributes.alignRight })}
             style={{backgroundColor: attributes.color}}>
          <div className="community-feature-image" style={{backgroundImage: 'url(' + backgroundImage +')'}}>
          </div>
          <div className="community-feature-content">
            <div className="community-feature-content-wrapper">
              <h3>{title}</h3>
              <div dangerouslySetInnerHTML={{__html: body}}/>
            </div>
          </div>
        </div>
      </div>
    }
  )
})
