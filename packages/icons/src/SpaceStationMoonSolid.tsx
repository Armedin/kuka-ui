import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 160c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm288 96c0 7.8-.3 15.5-1.9 23.1C438.8 304.7 351.2 320 256 320c-95.2 0-182.85-15.3-254.973-40.9C.347 271.5 0 263.8 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256zM192 80c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm64 432C134.9 512 33.38 427.9 6.794 314.8 79.44 338.4 164.7 352 256 352c91.3 0 176.6-13.6 249.2-37.2C478.6 427.9 377.1 512 256 512z" />
  </svg>
);

const SvgSpaceStationMoonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSpaceStationMoonSolid;
