import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 400c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-3.2.9-6.2 2.7-8.9l64-96c4.9-7.3 14.8-9.3 22.2-4.4 7.3 4.9 9.3 14.8 4.4 22.2L272 260.8V400zm-16 112C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm224-256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224 224-100.3 224-224z" />
  </svg>
);

const SvgClockOneThirty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockOneThirty;
