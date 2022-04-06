import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 256c0-5.3 2.7-10.3 7.1-13.3l96-64c7.4-4.9 17.3-2.9 22.2 4.4 4.9 7.4 2.9 17.3-4.4 22.2L272 264.6V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V256zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgClockTwoThirty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockTwoThirty;
