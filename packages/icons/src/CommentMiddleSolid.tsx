import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m323.2 408.5-48.89 93.39c-7.037 13.45-29.51 13.45-36.55 0l-48.89-93.39C80.08 384.5 0 303.1 0 208 0 93.09 114.6 0 256 0s256 93.09 256 208c0 95.1-80.1 176.5-188.8 200.5z" />
  </svg>
);

const SvgCommentMiddleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentMiddleSolid;
