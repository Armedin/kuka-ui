import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m240 285.9-71.1 47.4c-7.4 4.9-17.3 2.9-22.2-4.4-4.9-7.4-2.9-17.3 4.4-22.2l96-64c4.9-3.3 11.2-3.6 16.4-.8 5.3 2.8 8.5 8.2 8.5 14.1v144c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16l.9-114.1zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgClockEightThirty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockEightThirty;
