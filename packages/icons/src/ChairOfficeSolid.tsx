import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 224v-64c0-17.62-14.38-32-32-32S0 142.4 0 160v64c0 17.62 14.38 32 32 32s32-14.4 32-32zM351.1 64c0-35.38-28.63-64-64-64h-128c-34.5 0-63.12 28.62-63.12 64l.025 192h255.1L351.1 64zm64.9 64c-17.62 0-32 14.38-32 32l-.005 64c0 17.62 14.38 32 32.01 32s32-14.38 32-32v-64C448 142.4 433.6 128 416 128zm-12.4 181.9c-4.2-13.1-16.5-21.9-30.3-21.9H74.8c-13.88 0-26 8.75-30.38 21.88l-10.75 32C26.75 362.6 42.12 384 63.1 384H192v67.38c-28.25 6-51 19.62-61.88 37.25C123.8 498.9 132.5 512 145.1 512h157.8c12.62 0 21.38-13.12 15-23.38C307 471 284.3 457.4 256 451.4V384h128c21.75 0 37.25-21.38 30.37-42.13L403.6 309.9z" />
  </svg>
);

const SvgChairOfficeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChairOfficeSolid;
