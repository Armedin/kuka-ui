import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64.01C28.66 32 .006 60.65.006 96L0 415.1C0 451.3 28.65 480 64 480h213.5c16.97 0 33.25-6.742 45.26-18.75l106.5-106.5C441.3 342.7 448 326.5 448 309.5V96c0-35.34-28.7-64-64-64zm32 277.5c0 8.547-3.328 16.58-9.371 22.62l-106.5 106.5C294.1 444.7 286 448 277.5 448H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v213.5zM368 288h-64c-26.5 0-48 21.5-48 48v64c0 8.836 7.164 16 16 16s16-7.164 16-16v-64c0-8.836 7.164-16 16-16h64c8.836 0 16-7.164 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgNoteSticky = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNoteSticky;
