import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87 48.019 48.019 0 0 1 48.51.91L361 215z" />
  </svg>
);

const SvgPlaySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaySolid;
