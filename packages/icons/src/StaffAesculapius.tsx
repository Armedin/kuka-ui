import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M72 120c-8.84 0-16-7.2-16-16 0-8.84 7.16-16 16-16s16 7.16 16 16c0 8.8-7.16 16-16 16zm312 16c0 48.6-39.4 88-88 88h-56v-32h56c30.9 0 56-25.1 56-56s-25.1-56-56-56h-88v208h32c44.2 0 80 35.8 80 80s-35.8 80-80 80v-32c26.5 0 48-21.5 48-48s-21.5-48-48-48h-32v176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-96h-48c-35.35 0-64-28.7-64-64s28.65-64 64-64h16v32h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h48V80h-32v24c0 39.8-32.2 72-72 72h-8c-35.35 0-64-28.7-64-64 0-35.35 28.65-64 64-64h112V16c0-8.836 7.2-16 16-16s16 7.164 16 16v32h88c48.6 0 88 39.4 88 88zM64 80c-17.67 0-32 14.33-32 32 0 17.7 14.33 32 32 32h8c22.09 0 40-17.9 40-40V80H64z" />
  </svg>
);

const SvgStaffAesculapius = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStaffAesculapius;
