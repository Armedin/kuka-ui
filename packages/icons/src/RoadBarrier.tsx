import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M16 32c8.84 0 16 7.16 16 16v32h576V48c0-8.84 7.2-16 16-16s16 7.16 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V304H32v160c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V48c0-8.84 7.164-16 16-16zm592 240V112h-38.1l-80 160H608zm-537.89 0 79.99-160H32v160h38.11zM406.1 112h-92.2l-80 160h92.2l80-160zm35.8 0-80 160h92.2l80-160h-92.2zm-336 160h92.2l80-160h-92.2l-80 160z" />
  </svg>
);

const SvgRoadBarrier = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoadBarrier;
