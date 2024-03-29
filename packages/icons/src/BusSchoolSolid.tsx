import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c124.8 0 208 35.2 208 80v32h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-16v28.2c9.8 8.8 16 21.6 16 35.8v96c0 20.9-13.4 38.7-32 45.3V480c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H160v32c0 17.7-14.3 32-32 32H96c-17.67 0-32-14.3-32-32v-34.7c-18.64-6.6-32-24.4-32-45.3v-96c0-14.2 6.18-27 16-35.8V240H32c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32h16V80c0-44.8 83.2-80 208-80zM112 224c0 17.7 14.3 32 32 32h96V128h-96c-17.7 0-32 14.3-32 32v64zm160 32h96c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-96v128zM112 384c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM336 64H176c-8.8 0-16 7.16-16 16s7.2 16 16 16h160c8.8 0 16-7.16 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgBusSchoolSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBusSchoolSolid;
