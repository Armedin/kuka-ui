import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m439.7 189.9-176-151.1c-15.41-13.3-39.69-2.509-39.69 18.16v82.84C94.86 149.1 0 191 0 322.3c0 61.44 39.59 122.3 83.34 154.1 13.66 9.938 33.09-2.531 28.06-18.62-38.48-123.1 4.102-169.3 112.6-181.9v84.04c0 20.7 24.31 31.45 39.69 18.16l176-151.1c11.11-10.38 11.11-27.58.01-37.08zm128 0-176-151.1c-15.41-13.3-39.69-2.509-39.69 18.16v14.87l157.7 136.2-157.7 136.2v15.83c0 20.7 24.31 31.45 39.69 18.16l176-151.1c11.1-10.52 11.1-27.72 0-37.22z" />
  </svg>
);

const SvgShareAllSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShareAllSolid;
