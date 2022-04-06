import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 160c-17.66 0-32 14.3-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V192c0-17.7-14.34-32-32-32zm448 0c-17.66 0-32 14.34-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V192c0-17.7-14.3-32-32-32zm-192-12.4-32-3.553-32 3.553V192H96v256h320V192H288v-44.4zm110.2-83.5L288 76.35V64c0-17.66-14.34-32-32-32s-32 14.34-32 32v12.35L113.8 64.1c-4.6-.52-9.1.96-12.5 3.96C97.95 71.1 96 75.46 96 80v32c0 4.543 1.951 8.896 5.344 11.94a16.186 16.186 0 0 0 12.456 3.96L256 112.1l142.2 15.81c4.512.512 9.023-.96 12.42-3.969C414 120.9 416 116.5 416 112V80a16.07 16.07 0 0 0-5.344-11.94A15.96 15.96 0 0 0 398.2 64.1z" />
  </svg>
);

const SvgPipeValveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipeValveSolid;
