import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-75.2-287.3c-6.609-2.047-13.91.36-17.92 6.094L224 276.1l-98.9-141.3c-4-5.7-11.3-8.2-17.9-6.1C100.5 130.8 96 137 96 144v224c0 8.8 7.2 16 16 16s16-7.2 16-16V194.8l82.89 118.4c6 8.562 20.22 8.562 26.22 0L320 194.8V368c0 8.844 7.156 16 16 16s16-7.156 16-16V144c0-7-4.5-13.2-11.2-15.3z" />
  </svg>
);

const SvgSquareM = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareM;
