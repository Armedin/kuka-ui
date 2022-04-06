import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M560 416c-8.844 0-16 7.156-16 16 0 8.812-7.188 16-16 16H48c-8.81 0-16-7.2-16-16s-7.16-16-16-16-16 7.2-16 16c0 26.5 21.53 48 48 48h479.8c26.5 0 48.2-21.5 48.2-48 0-8.8-7.2-16-16-16zM528 32H128c-17.7 0-32 14.33-32 32l-.9 224c0 53.02 42.98 96 96 96h192c53.02 0 96-42.98 96-96l.9-32h48c61.8 0 112-50.2 112-112S589.8 32 528 32zm-80 256c0 35.29-28.71 64-64 64H192c-35.29 0-64-28.71-64-64V64h80v44l-35.2 26.4c-8.1 6-12.8 15.5-12.8 25.6l-.9 64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32l.9-64c0-10.07-4.742-19.56-12.8-25.6L240 108V64h208v224zM224 136l32 24v64h-64v-64l32-24zm304 88h-48V64h48c44.1 0 80 35.88 80 80s-35.9 80-80 80z" />
  </svg>
);

const SvgMugTeaSaucer = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugTeaSaucer;
