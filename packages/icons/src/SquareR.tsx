import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-80-208c0-44.1-35.9-80-80-80H144c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h70.35l77.5 90.41C311 382.1 315.5 384 320 384a15.89 15.89 0 0 0 10.41-3.859c6.719-5.75 7.5-15.84 1.75-22.55l-60.97-71.13C308.1 279.3 336 246.9 336 208zm-80 48h-96v-96h96c26.47 0 48 21.53 48 48s-21.5 48-48 48z" />
  </svg>
);

const SvgSquareR = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareR;
