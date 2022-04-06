import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 304V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v240c0 44.2-35.8 80-80 80h-48v64c0 35.3-28.7 64-64 64s-64-28.7-64-64v-64H80c-44.18 0-80-35.8-80-80zm304 48c26.5 0 48-21.5 48-48v-16H32v16c0 26.5 21.49 48 48 48h80v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h80zm48-288c0-17.67-14.3-32-32-32h-96v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V32h-64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V32H64c-17.67 0-32 14.33-32 32v192h320V64z" />
  </svg>
);

const SvgBrush = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBrush;
