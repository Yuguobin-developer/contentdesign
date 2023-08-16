import {MediaUpload} from '@wordpress/editor'
import {SelectControl, InspectorControls} from '@wordpress/block-editor'
import { withSelect } from '@wordpress/data'
import {PanelBody, PanelRow} from '@wordpress/components'

const PostEdit = withSelect((select, props) => {
  const {getMedia} = select('core')
  const selectedPost = props.attributes.selectedPost
  const query = {
    categories: post_block.category_id
  }
  const posts = select('core').getEntityRecords('postType', 'post', query)
  const post = posts.find(({id}) => id === parseInt(selectedPost))
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
    const content = {
      title: (post) ? post.title.rendered : 'Select post from sidebar',
      body: (post) ? post.content.rendered : 'This block has no content. To select a post open the sidebar using the sproket, click \'Block\' then select a post from the dropdown.',
      backgroundImage: (media && media.source_url) ? media.source_url : ''
    }

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
          </PanelBody>

        </InspectorControls>
      }
      {
        content ?
          <div>
            <div className={'wp-block-content-design-post-image'} style={{backgroundImage: 'url(' + content.backgroundImage +')'}}/>
            <h3>
              {content.title}
            </h3>
            <div dangerouslySetInnerHTML={{__html: content.body}}/>
          </div>
          : ''
      }
    </div>
  }
);

export default PostEdit;
