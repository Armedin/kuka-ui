import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M497.1 222.1 289 14C279.636 4.636 267.38-.04 255.11-.03 243.7.01 231.5 4.686 222.1 14.03L14.03 222.1C4.676 231.5 0 243.7 0 255.1c0 12.26 4.676 24.52 14.03 33.87l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1c12.26 0 24.52-4.677 33.87-14.03l208.1-208.1c9.352-9.353 14.03-21.61 14.03-33.87-.9-11.4-4.7-23.6-14.9-33zM410.5 252l-96 84c-10.79 9.545-26.53.982-26.53-12.03V272H223.1v48c0 17.6-13.5 32-32 32s-32-14.4-32-32v-80c0-17.6 14.4-32 32-32h95.1v-52c0-13.85 16.39-20.99 26.53-12.03l96 84C414 231 415.1 235.4 415.1 240s-1.1 9-4.6 12z" />
  </svg>
);

const SvgDiamondTurnRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiamondTurnRightSolid;
