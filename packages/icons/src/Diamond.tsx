import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M500.3 227.7c15.6 15.6 15.6 41 0 56.6l-216 216c-15.6 15.6-41 15.6-56.6 0l-215.98-216c-15.625-15.6-15.625-41 0-56.6L227.7 11.72c15.6-15.625 41-15.625 56.6 0l216 215.98zM34.34 250.3a8.112 8.112 0 0 0 0 11.4l215.96 216c3.2 3.1 8.2 3.1 11.4 0l216-216c3.1-3.2 3.1-8.2 0-11.4l-216-215.96a8.112 8.112 0 0 0-11.4 0L34.34 250.3z" />
  </svg>
);

const SvgDiamond = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiamond;
