import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M19.62 223.1C7.001 236.5 0 253.5 0 271.3v141.9C0 450.1 29.87 480 66.87 480h141.9c17.62 0 34.64-6.1 47.26-19.63l58.9-58.85L78.53 165.1l-58.91 58zM448 64c0-17.05-13.73-32-32-32-8.188 0-16.38 3.125-22.62 9.375l-104.3 104.3L217.2 73.71c-6.561-6.5-15.12-9.737-23.68-9.737-8.553 0-17.09 3.237-23.65 9.737l-68.63 68.74 236.4 236.4 68.63-68.63c6.562-6.564 9.813-15.13 9.813-23.69 0-8.562-3.25-17.13-9.813-23.69l-71.9-71.94 104.3-104.3C444.9 80.38 448 72.19 448 64z" />
  </svg>
);

const SvgDreidelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDreidelSolid;
