import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 272H64v32h320v-32zM64 176h320v-32H64v32zM32 64h32v48h320V64h32c17.67 0 32-14.33 32-32S433.67 0 416 0H32C14.33 0 0 14.33 0 32s14.33 32 32 32zm400 144H64v32h368c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16 240h-32v-48H64v48H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32zM64 368h320v-32H64v32z" />
  </svg>
);

const SvgReelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgReelSolid;
