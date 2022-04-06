import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M233.1 16.72C236.3 6.764 245.5 0 256 0v406.4L126.7 506.9c-8.3 6.5-19.8 6.8-28.43.8-8.62-6-12.33-17-9.14-27l50.97-160L9.267 218.9A23.953 23.953 0 0 1 1.3 192.2c3.328-9.7 12.45-17.1 22.7-17.1h158.5l50.6-158.38z" />
  </svg>
);

const SvgStarSharpHalfSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarSharpHalfSolid;
