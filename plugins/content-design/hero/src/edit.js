import {MediaUpload} from '@wordpress/editor'
import Style from './style'

const HeroEdit = ( props ) => {
  const { setAttributes, className } = props;
  return (
    <div>
      <MediaUpload/>
    </div>
  );
};

export default HeroEdit;
