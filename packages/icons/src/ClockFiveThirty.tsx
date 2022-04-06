import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 400c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-7.1 4.6-13.3 11.4-15.3 6.7-2.1 14 .6 17.9 6.4l64 96c4.9 7.4 2.9 17.3-4.4 22.2-7.4 4.9-17.3 2.9-22.2-4.4L272 308.8V400zm-16 112C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm224-256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224 224-100.3 224-224z" />
  </svg>
);

const SvgClockFiveThirty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockFiveThirty;
