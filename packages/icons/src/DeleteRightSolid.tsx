import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 128c0-35.35 28.65-64 64-64h306.7c17 0 32.4 6.74 45.3 18.75L566.6 233.4c6 6 9.4 14.1 9.4 22.6 0 8.5-3.4 16.6-9.4 22.6L416 429.3c-12.9 12-28.3 18.7-45.3 18.7H64c-35.35 0-64-28.7-64-64V128zm143 80.1 47.1 47L143 303c-9.3 9.4-9.3 24.6 0 33.1 9.4 10.2 24.6 10.2 33.1 0l47-46.2 47.9 46.2c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1l-46.2-47.9 46.2-47c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-47.9 47.1-47-47.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1z" />
  </svg>
);

const SvgDeleteRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDeleteRightSolid;
