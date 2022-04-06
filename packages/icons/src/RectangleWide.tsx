import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h512zm0 32H64c-17.67 0-32 14.3-32 32v256c0 17.7 14.33 32 32 32h512c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgRectangleWide = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleWide;
