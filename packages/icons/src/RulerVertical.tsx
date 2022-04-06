import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M192 0c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h128zm0 32H64c-17.67 0-32 14.33-32 32v384c0 17.7 14.33 32 32 32h128c17.7 0 32-14.3 32-32v-32h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V64c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgRulerVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRulerVertical;
