import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M240 320h320c26.4 0 48-21.6 48-48V80c0-26.4-21.6-48-48-48H448v128l-48-32-48 32V32H240c-26.4 0-48 21.6-48 48v192c0 26.4 21.6 48 48 48zm368 64H128V64c0-35.2-28.8-64-64-64H31.1C14.4 0 0 14.4 0 32s14.4 32 31.1 32H48c8.84 0 16 7.16 16 16v335.1c0 17.6 14.4 32 32 32h66.92C161.1 453 160 458.4 160 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.641-1.13-10.97-2.917-16h197.9c-1.787 5.027-2.928 10.36-2.928 16C448 490.5 469.5 512 496 512c26.51 0 48.01-21.49 48.01-47.1 0-5.641-1.12-10.97-2.907-16h66.88C625.6 448 640 433.6 640 415.1c0-16.7-14.4-31.1-32-31.1z" />
  </svg>
);

const SvgCartFlatbedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCartFlatbedSolid;
