import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 32c77.4 0 141.1 54.97 156.8 128h3.2c17.7 0 32 14.3 32 32s-14.3 32-32 32h-3.2c-15.7 73-79.4 128-156.8 128H96v96c0 17.7-14.33 32-32 32s-32-14.3-32-32V224c-17.67 0-32-14.3-32-32s14.33-32 32-32V64c0-17.67 14.33-32 32-32h128zm90.5 128c-13.1-37.3-48.7-64-90.5-64H96v64h186.5zM96 224v64h96c41.8 0 77.4-26.7 90.5-64H96z" />
  </svg>
);

const SvgPesetaSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPesetaSignSolid;
