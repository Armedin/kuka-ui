import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 400c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-5.9 3.2-11.3 8.5-14.1 5.2-2.8 10.6-2.5 16.4.8l96 64c7.3 4.9 9.3 14.8 4.4 22.2-4.9 7.3-14.8 9.3-22.2 4.4L272 285.9V400zm-16 112C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm224-256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224 224-100.3 224-224z" />
  </svg>
);

const SvgClockFourThirty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockFourThirty;
