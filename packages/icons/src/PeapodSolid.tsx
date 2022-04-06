import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.1 32.54c.451-18.11-14.41-32.98-32.53-32.53-61.21 1.524-195.9 15.29-282.5 101.9L101.9 196.9C15.3 283.5 1.5 418.2 0 479.4c-.451 18.11 14.41 32.98 32.53 32.53 61.21-1.525 195.9-15.3 282.5-101.9L410.09 315C496.7 228.5 510.5 93.75 511.1 32.54zM128 440c-30.93 0-56-25.07-56-56s25.07-56.9 56-56.9 56 25.07 56 56-25.1 56.9-56 56.9zm128-128c-30.93 0-56-25.07-56-56s25.07-56 56-56 56 25.1 56 56-25.1 56-56 56zm128-128c-30.9 0-56-25.1-56-56s25.07-56 56-56c30.9-.9 56 25.07 56 56s-25.1 56-56 56z" />
  </svg>
);

const SvgPeapodSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeapodSolid;
