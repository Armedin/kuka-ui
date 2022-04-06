import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M88 32h24c8.8 0 16 7.16 16 16s-7.2 16-16 16H88c-30.93 0-56 25.07-56 56v24c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16v-24c0-48.6 39.4-88 88-88zM32 208v96c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16v-96c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16zm416 0v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm-32-64v-24c0-30.93-25.1-56-56-56h-24c-8.8 0-16-7.16-16-16s7.2-16 16-16h24c48.6 0 88 39.4 88 88v24c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32 248c0 48.6-39.4 88-88 88h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24c30.9 0 56-25.1 56-56v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v24zm-416 0c0 30.9 25.07 56 56 56h24c8.8 0 16 7.2 16 16s-7.2 16-16 16H88c-48.6 0-88-39.4-88-88v-24c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v24zm144 88c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96zm0-448h96c8.8 0 16 7.16 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.16-16-16s7.2-16 16-16z" />
  </svg>
);

const SvgSquareDashed = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareDashed;
