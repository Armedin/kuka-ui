import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 416c-35.3 0-64-28.7-64-64 0-18.6 7.9-35.3 20.5-47l-82.6-153.4c-4.2-7.8-1.3-17.5 6.5-21.7 7.8-4.2 17.5-1.3 21.7 6.5l82.6 153.4c4.9-1.2 10-1.8 15.3-1.8 35.3 0 64 28.7 64 64s-28.7 64-64 64zm32-64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-32 160C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm224-256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224 224-100.3 224-224z" />
  </svg>
);

const SvgGaugeSimpleLow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeSimpleLow;
