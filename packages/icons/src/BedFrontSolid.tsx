import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 160c0-17.62 14.38-32 32-32h96c17.62 0 32 14.38 32 32v32h32v-32c0-17.62 14.38-32 32-32h96c17.62 0 32 14.38 32 32v32h48V64c0-17.62-14.38-32-32-32H64c-17.62 0-32 14.38-32 32v128h48v-32zm368 64H64c-35.38 0-64 28.6-64 64v176c0 8.9 7.125 16 16 16h32c8.88 0 16-7.1 16-16v-48h384v48c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V288c0-35.4-28.6-64-64-64z" />
  </svg>
);

const SvgBedFrontSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBedFrontSolid;
