import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 480h224c17.7 0 32-14.3 32-32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-17.67 0-32 14.3-32 32v224c0 17.7 14.33 32 32 32zm96-416c0-35.35 28.7-64 64-64h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V64zm64 256h224c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32H224c-17.7 0-32 14.33-32 32v224c0 17.7 14.3 32 32 32z" />
  </svg>
);

const SvgClone = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClone;
