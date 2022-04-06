import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 0c17.7 0 32 14.33 32 32v54.66C156.3 99 176 127.2 176 160c0 32.8-19.7 60.1-48 73.3V480c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32V233.3c-28.25-13.2-48-40.5-48-73.3s19.75-61 48-73.34V32C64 14.33 78.33 0 96 0zm0 192c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm240 160c0 32.8-19.7 60.1-48 73.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-54.7c-28.3-13.2-48-40.5-48-73.3s19.7-61 48-73.3V32c0-17.67 14.3-32 32-32s32 14.33 32 32v246.7c28.3 12.3 48 40.5 48 73.3zm-80 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm192 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V265.3c-28.3-13.2-48-40.5-48-73.3s19.7-61 48-73.3V32c0-17.67 14.3-32 32-32s32 14.33 32 32v86.7c28.3 12.3 48 40.5 48 73.3s-19.7 60.1-48 73.3V480zm-32-320c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgSlidersUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlidersUpSolid;
