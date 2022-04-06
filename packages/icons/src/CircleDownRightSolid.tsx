import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm106.5 346.5c0 8.836-7.162 16-15.1 16H188.1a15.977 15.977 0 0 1-14.78-9.875 15.995 15.995 0 0 1 3.471-17.44l45.25-45.25L154.1 222c-12.5-12.5-12.4-32.7.1-45.2l22.63-22.63c12.5-12.5 32.72-12.54 45.21-.041l67.92 67.92 45.25-45.25a15.98 15.98 0 0 1 17.44-3.469 15.976 15.976 0 0 1 9.877 14.78V346.5z" />
  </svg>
);

const SvgCircleDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleDownRightSolid;
