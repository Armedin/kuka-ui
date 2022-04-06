import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M80 128c-8.84 0-16 7.2-16 16s7.16 16 16 16c132.3 0 240 107.7 240 240 0 8.844 7.156 16 16 16s16-7.156 16-16c0-150-122.9-272-272-272zm0 96c-8.84 0-16 7.2-16 16s7.16 16 16 16c79.41 0 144 64.59 144 144 0 8.844 7.156 16 16 16s16-7.156 16-16c0-97.9-79-176-176-176zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-304-96c-26.51 0-48 21.5-48 48s21.49 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
  </svg>
);

const SvgSquareRss = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareRss;
