import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm96 360c0 10.5-6.828 19.78-16.84 22.91-2.36.69-4.76 1.09-7.16 1.09-7.719 0-15.17-3.734-19.73-10.34L208 228.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.5 6.828-19.78 16.84-22.91 10.02-3.062 20.94.61 26.89 9.25L304 283.2V152c0-13.2 10.8-24 24-24s24 10.8 24 24v208z" />
  </svg>
);

const SvgCircleNSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleNSolid;
