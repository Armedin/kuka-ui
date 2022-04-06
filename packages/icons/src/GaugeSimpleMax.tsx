import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 416c-35.3 0-64-28.7-64-64s28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1c7.5-4.6 17.4-2.1 21.9 5.5 4.6 7.5 2.1 17.4-5.5 21.9l-106.8 64.1c1.7 5.8 2.6 11.9 2.6 18.2 0 35.3-28.7 64-64.9 64h.9zm32-64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-32 160C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm224-256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224 224-100.3 224-224z" />
  </svg>
);

const SvgGaugeSimpleMax = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeSimpleMax;
