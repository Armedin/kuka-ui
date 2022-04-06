import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m323.2 103.5-48.89-93.39C270.8 3.361 263.4 0 256 0s-14.8 3.361-18.3 10.08l-48.89 93.39C80.08 127.5 0 208 0 304c0 114.9 114.6 208 256 208s256-93.09 256-208c0-96-80.1-176.5-188.8-200.5zM256 480c-123.5 0-224-78.95-224-176 0-78.4 67.33-148 163.7-169.3l14.6-3.2L256 44.17l45.72 87.34 14.55 3.209C412.7 155.1 480 225.6 480 304c0 97-100.5 176-224 176z" />
  </svg>
);

const SvgCommentMiddleTop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentMiddleTop;
