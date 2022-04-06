import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 32H128c-17.7 0-32 14.33-32 32l.009 224c0 53.02 42.98 96 96 96h192C437 384 480 341 480 288v-32h48c61.8 0 112-50.2 112-112S589.8 32 528 32zm-80 256c0 35.29-28.71 64-64 64H192c-35.29 0-64-28.71-64-64V64h320v224zm80-64h-48V64h48c44.1 0 80 35.88 80 80s-35.9 80-80 80zm32 192c-8.844 0-16 7.156-16 16 0 8.812-7.188 16-16 16H48c-8.81 0-16-7.2-16-16s-7.16-16-16-16-16 7.2-16 16c0 26.5 21.53 48 48 48h480c26.47 0 48-21.53 48-48 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgMugSaucer = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugSaucer;
