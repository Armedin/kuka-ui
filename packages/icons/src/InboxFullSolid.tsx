import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M508.3 304.9 447.05 56.2C443.5 42 430.7 32 416 32H96c-14.69 0-27.47 10-31.03 24.25L3.72 304.95A126.947 126.947 0 0 0 0 335.5V432c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-96.47c0-10.33-1.2-20.63-3.7-30.63zM384 288l-32 64H160l-32-64H72.97L121 96h270l48.03 192H384zm-16-64H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-192-48h160c8.8 0 16-7.2 16-16s-7.162-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgInboxFullSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInboxFullSolid;
