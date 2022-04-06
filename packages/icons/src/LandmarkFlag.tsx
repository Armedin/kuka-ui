import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 96h-80v32h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h192V16c0-8.836 7.2-16 16-16h96c8.8 0 16 7.164 16 16v64c0 8.84-7.2 16-16 16zm-80-32h64V32h-64v32zM48 368c0-8.8 7.16-16 16-16V192h32v160h80V192h32v160h96V192h32v160h80V192h32v160c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.84 0-16-7.2-16-16zm-24 64c0-8.8 7.16-16 16-16h432c8.8 0 16 7.2 16 16s-7.2 16-16 16H40c-8.84 0-16-7.2-16-16zM0 496c0-8.8 7.164-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16z" />
  </svg>
);

const SvgLandmarkFlag = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLandmarkFlag;
