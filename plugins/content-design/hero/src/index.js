import {registerBlockType, getBlockDefaultClassName} from '@wordpress/blocks'
import {RichText, MediaUpload} from '@wordpress/block-editor'
import classNames from 'classnames'
// import {MediaUpload} from '@wordpress/editor'
import icon from './icon'
// import edit from './edit'
import example from './example'
// import save from './save'
//http://jschof.com/gutenberg-blocks/tutorial/beginner-gutenberg-block-an-easy-media-block-with-media-upload-and-richtext/
registerBlockType('content-design/hero', {
  title: 'Hero image',
  attributes: {
    mediaID: {
      type: 'number',
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    }
  },
  icon,
  category: 'content-design',
  example: {
    attributes: {
      mediaURL: 'http://localhost:3000/wp-content/uploads/2019/11/homepage-1024x434.jpg'
    }
  },
  edit:( { attributes, setAttributes, className, isSelected } ) => {
    const selectImage = ( media ) => {
      setAttributes( {
        mediaURL: media.url,
        mediaID: media.id,
      } );
    };
    const selectedClass = isSelected ? className + '-selected' : ''
    const classes = [ className, selectedClass]
    return (
      <div className={classNames(classes)}>
        <MediaUpload
          onSelect={selectImage}
          render={ ({open}) => {
            return (
              <div onClick={open}>
                {
                  attributes.mediaURL ?
                    <div className={className + "-image"}
                         style={{backgroundImage: 'url(' + attributes.mediaURL + ')'}}
                  /> :
                  <div className={className + "-button"}>
                    <div>
                    <span className={className + '-big'}>Click to select an image.</span>
                    <span className={className + '-small'}>Minimum size 1440 x 540</span>
                    </div>
                  </div>
                }
              </div>

            );
          }}/>
      </div>
    );
  },
  save: ({ attributes: { mediaURL }}) => {
    const className = getBlockDefaultClassName( 'content-design/hero' )
    const imageClass = className + '-image'
    return (
      <div className={className}>
        {className}
        <div className={imageClass}
             style={{backgroundImage: 'url(' + mediaURL + ')'}}
        />
      </div>
    );
  }
})
