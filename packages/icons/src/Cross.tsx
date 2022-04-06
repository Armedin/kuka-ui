import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M351.1 128h-96V32c0-17.62-14.37-32-31.1-32h-64c-17.6 0-32.9 14.38-32.9 32v96h-96C14.37 128 0 142.4 0 160v64c0 17.62 14.38 32 32 32h96v224c0 17.62 14.38 32 32 32h64c17.62 0 31.1-14.38 31.1-32V256h96c17.62 0 31.1-14.38 31.1-32v-64c.9-17.6-12.6-32-31.1-32zm.9 96H240c-8.8 0-16 7.2-16 16v240h-64V240c0-8.8-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16V32h64v112c0 8.8 7.2 16 16 16h112v64z" />
  </svg>
);

const SvgCross = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCross;
