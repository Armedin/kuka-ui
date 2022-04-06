import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm125.1 289.6c-2.9 8.7-11.6 14.4-21.1 14.4H152a23.99 23.99 0 0 1-22-14.41 24.053 24.053 0 0 1 4.407-25.94l104-112c9.094-9.75 26.09-9.75 35.19 0l104 112c6.503 7.05 8.203 17.15 3.503 25.95z" />
  </svg>
);

const SvgCircleCaretUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCaretUpSolid;
