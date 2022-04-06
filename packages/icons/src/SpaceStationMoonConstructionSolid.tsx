import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M160 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm96 160c-95.2 0-182.85-15.3-254.973-40.9C.347 271.5 0 263.8 0 256 0 114.6 114.6 0 256 0c60.5 0 116.2 21.02 160 56.15V96h-64v64h96v64h62c1.3 10.5 2 21.2 2 32 0 7.8-.3 15.5-1.9 23.1C438.8 304.7 351.2 320 256 320zm-64-80c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm64 112c44.3 0 87.3-3.2 128-9.2V384h64v41.3C401.1 478.5 332.5 512 256 512 134.9 512 33.38 427.9 6.794 314.8 79.44 338.4 164.7 352 256 352z" />
  </svg>
);

const SvgSpaceStationMoonConstructionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSpaceStationMoonConstructionSolid;
