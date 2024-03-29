import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 32c17.67 0 32 14.33 32 32v32h85.2L64 266.3V448c0 17.7-14.33 32-32 32S0 465.7 0 448V64c0-17.67 14.33-32 32-32zm277.2 256h-74.4l96-192h74.4l-96 192zM458.8 96h74.4l-96 192h-74.4l96-192zm-256 0h74.4l-96 192h-74.4l96-192zM576 117.7V64c0-17.67 14.3-32 32-32s32 14.33 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h-85.2L576 117.7z" />
  </svg>
);

const SvgRoadBarrierSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoadBarrierSolid;
