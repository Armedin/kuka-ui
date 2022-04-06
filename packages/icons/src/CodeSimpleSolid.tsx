import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M77.25 256 214.6 393.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L9.372 278.6c-12.496-12.5-12.496-32.7 0-45.2L169.4 73.37c12.5-12.49 32.7-12.49 45.2 0 12.5 12.5 12.5 32.73 0 45.23L77.25 256zM361.4 118.6c-12.5-12.5-12.5-32.73 0-45.23 12.5-12.49 32.7-12.49 45.2 0l160 160.03c12.5 12.5 12.5 32.7 0 45.2l-160 160c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2L498.7 256 361.4 118.6z" />
  </svg>
);

const SvgCodeSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCodeSimpleSolid;
