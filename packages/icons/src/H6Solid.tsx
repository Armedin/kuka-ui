import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M501.7 160.1c76.9 3 138.3 66.3 138.3 143.9 0 79.5-64.5 144-144 144s-144-64.5-144-144c0-38.3 13-75.5 36.1-105.5L487 76.01c11.1-13.8 31.2-16.04 44.1-5 14.7 11.04 16.9 31.19 5 44.09l-34.4 45zM416 304c0 44.2 35.8 80 80 80s80-35.8 80-80-35.8-80-80-80-80 35.8-80 80zM32 64c17.67 0 32 14.33 32 32v128h192V96c0-17.67 14.3-32 32-32s32 14.33 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.33 32-32 32S0 433.7 0 416V96c0-17.67 14.33-32 32-32z" />
  </svg>
);

const SvgH6Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH6Solid;
