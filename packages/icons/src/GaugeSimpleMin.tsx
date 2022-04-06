import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 352c0-6.3.9-12.4 2.6-18.2L87.77 269.7c-7.58-4.5-10.04-14.4-5.49-21.9 4.55-7.6 14.37-10.1 21.92-5.5l106.9 64.1c11.5-11.4 27.4-18.4 44-18.4 36.2 0 64.9 28.7 64.9 64s-28.7 64-64.9 64c-34.4 0-64-28.7-64-64h.9zm64 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgGaugeSimpleMin = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeSimpleMin;
