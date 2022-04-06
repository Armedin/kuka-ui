import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 480h320c35.35 0 64-28.66 64-64V96c0-35.34-28.65-64-64-64H64C28.65 32 0 60.66 0 96v320c0 35.3 28.65 64 64 64zM32 96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96zm233.1 223.7-90 .3c-8 0-16 7.2-15.1 16 0 8.9 7.2 16 16 16l128-.375c8.9-.025 16-7.225 16-16.025V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v89.38L155.3 164.7c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7c-6.25 6.25-6.25 16.38 0 22.62L265.1 319.7z" />
  </svg>
);

const SvgSquareArrowDownRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowDownRight;
