import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 304c0 114.9-114.6 208-256 208S0 418.91 0 304c0-95.99 80.08-176.5 188.8-200.5l48.89-93.39C241.2 3.361 248.6 0 256 0s14.76 3.361 18.28 10.08l48.89 93.39C431.9 127.5 512 208 512 304z" />
  </svg>
);

const SvgCommentMiddleTopSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentMiddleTopSolid;
