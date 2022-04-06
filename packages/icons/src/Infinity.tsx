import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M488.9 96c-82.6 0-142.6 82.5-168.9 126.5C293.8 178.5 233.8 96 151.1 96 67.75 96 0 167.8 0 256s67.75 160 151.1 160c82.5 0 142.7-82.5 168.9-126.5 26.3 44 86.3 126.5 168.9 126.5 83.4 0 151.1-71.7 151.1-160S572.3 96 488.9 96zM151.1 384C85.5 384 32 326.6 32 256s53.5-128 119.1-128c78 0 136.5 100.6 150.9 128-14.4 27.4-72.9 128-150.9 128zm337.8 0c-78 0-136.5-100.6-150.9-128 14.38-27.38 72.88-128 150.9-128 65.6 0 119.1 57.4 119.1 128s-53.5 128-119.1 128z" />
  </svg>
);

const SvgInfinity = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInfinity;
