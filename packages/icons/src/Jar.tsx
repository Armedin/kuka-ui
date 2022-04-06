import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M256 0c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H64c-8.84 0-16-7.16-16-16 0-8.836 7.16-16 16-16h192zM0 128c0-35.35 28.65-64 64-64h192c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm32 0v64h256v-64c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32zm0 224h256V224H32v128zm0 32v64c0 17.7 14.33 32 32 32h192c17.7 0 32-14.3 32-32v-64H32z" />
  </svg>
);

const SvgJar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJar;
