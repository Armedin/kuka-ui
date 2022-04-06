import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 400c0 8.8-7.2 16-16 16s-16-7.2-16-16V272h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h112c8.8 0 16 7.2 16 16v144zm-16 112C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm224-256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224 224-100.3 224-224z" />
  </svg>
);

const SvgClockNineThirty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockNineThirty;
