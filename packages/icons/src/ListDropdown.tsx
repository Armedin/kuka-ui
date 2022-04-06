import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m384 109.3 31.8-19.02c7.5-4.55 17.4-2.09 21.9 5.49 4.6 7.53 2.1 17.43-5.5 21.93l-40 24c-5 3.1-11.4 3.1-16.4 0l-40-24c-7.6-4.5-10.1-14.4-5.5-21.93 4.5-7.58 14.4-10.04 21.9-5.49L384 109.3zm0 146.7c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h256zm0 96c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h256zM0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v64h448V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32zm0 320c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V192H32v224z" />
  </svg>
);

const SvgListDropdown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgListDropdown;
