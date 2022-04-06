import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 64C32 28.65 60.65 0 96 0h160c35.3 0 64 28.65 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V221.1c-27.6-6.2-48-31.3-48-61.1V96l-32-32c-8.8-8.84-8.8-23.16 0-32s23.2-8.84 32 0l77.3 77.3c12 12 18.7 28.2 18.7 45.2V376c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40.9-40-40.9h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32V64zm64 112c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16H112c-8.8 0-16 7.16-16 16v96z" />
  </svg>
);

const SvgGasPumpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGasPumpSolid;
