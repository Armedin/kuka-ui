import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 320h64v64h-64v-64zM80 192v-48C80 64.47 144.5 0 224 0s144 64.47 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h16zm64 0h160v-48c0-44.18-35.8-80-80-80s-80 35.82-80 80v48zm16 64v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v64h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h64v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-64v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
  </svg>
);

const SvgLockHashtagSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLockHashtagSolid;
