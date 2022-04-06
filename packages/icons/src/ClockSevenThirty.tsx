import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m240 308.8-34.7 52.1c-4.9 7.3-14.8 9.3-22.2 4.4-7.3-4.9-9.3-14.8-4.4-22.2l64-96c3.9-5.8 11.2-8.5 17.9-6.4 6.8 2 11.4 8.2 11.4 14.4V400c0 8.8-7.2 16-16 16s-16-7.2-16-16v-91.2zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgClockSevenThirty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockSevenThirty;
