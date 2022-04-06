import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.65-64-64-64H64C28.65 32 0 60.66 0 96zm32 0c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96zm100.7 228.7c-6.25 6.25-6.25 16.38 0 22.62 3.1 3.08 7.2 4.68 11.3 4.68s8.188-1.562 11.31-4.688L288 214.6V304c0 8.844 7.156 16 16 16s16-7.2 16-16V176.4c0-8.812-7.141-15.97-15.95-16L176 160c-8.8 0-16 7.1-16 15.1-.9 9.7 7.1 16 15.1 16.9l89.15.273L132.7 324.7z" />
  </svg>
);

const SvgSquareArrowUpRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowUpRight;
