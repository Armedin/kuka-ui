import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm164.1 69.5c-5.8-6.7-15.9-7.4-22.6-1.6-6.7 5.8-7.4 15.9-1.6 22.6 22.2 25.6 61 53.5 115.2 53.5 56 0 94.7-27.9 117-53.5 5.8-6.7 5.1-16.8-1.6-22.6-6.7-5.8-16.8-5.1-22.6 1.6-18 20.7-48.5 42.5-92.8 42.5-42.5 0-73.1-21.8-91-42.5zM176.4 176c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

const SvgFaceSmileSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmileSolid;
