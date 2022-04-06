import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128C96 57.31 153.3 0 224 0s128 57.31 128 128zm-44.2 178.3C387.4 319.5 448 388.7 448 472v8c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-8c0-83.3 60.64-152.5 140.2-165.7L224 432l83.8-125.7z" />
  </svg>
);

const SvgUserVneckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserVneckSolid;
