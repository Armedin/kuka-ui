import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.2 275c-20.1-47.12-48.5-151.8-73.12-186.8C397.6 33.62 334.5 0 266.1 0h-75C85.99 0 0 86 0 192c0 56.75 24.75 107.6 64 142.9L63.1 512h255.1l.002-64h63.1c35.37 0 63.1-28.62 63.1-63.1V320h31.1c27.598 0 43.098-23.9 33.698-45zm-158.1-51c-17.62 0-31.1-14.38-31.1-32s14.37-32 31.1-32 31.1 14.38 31.1 32-12.6 32-31.1 32z" />
  </svg>
);

const SvgHeadSideSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadSideSolid;
