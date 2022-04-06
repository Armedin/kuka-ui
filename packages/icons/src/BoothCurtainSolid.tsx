import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 32v464c0 8.8 7.25 16 15.1 16H48c8.75 0 16-7.2 16-16V64h32V0H32C14.25 0 0 14.25 0 32zM480 0h-32v496c0 8.75 7.25 16 16 16h32c8.75 0 16-7.25 16-16V32c0-17.75-14.2-32-32-32zM127.1 396.7c0 25.53 18.46 49.04 43.91 51.14C198.2 449.1 220.3 431.1 224 406.5c3.6 23.3 23.5 41.5 48 41.5s44.45-18.21 48-41.54c3.706 24.33 25.3 43.1 51.19 41.44 26.01-1.672 44.81-26.07 44.81-52.13V0H128l-.9 396.7z" />
  </svg>
);

const SvgBoothCurtainSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoothCurtainSolid;
