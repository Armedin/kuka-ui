import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM304 288h-16v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H151.6l55.23-138.1c3.281-8.188-.719-17.5-8.922-20.78-8.108-3.32-17.508.68-20.808 8.98l-64 160c-1.9 4.9-1.3 10.5 1.7 14 2.9 5.3 7.9 7.9 13.2 7.9h128v48c0 8.844 7.156 16 16 16s16-7.156 16-16v-48h16c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgSquare4 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare4;
