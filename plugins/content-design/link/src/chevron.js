import { G, Path, SVG } from '@wordpress/components';

export default ({ fill, className }) => (
  <SVG
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
  >
    <Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <Path d="M0 0h24v24H0z" fill={'none'} />
  </SVG>
);
