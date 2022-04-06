import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m148.7 443.3-144-144C1.563 296.2 0 292.1 0 288s1.562-8.188 4.688-11.31l144-144c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62L54.63 272H432c26.5 0 48-21.5 48-48V48c0-8.84 7.2-16 16-16s16 7.16 16 16v175.1c0 45-35.9 80.9-80 80.9H54.63l116.7 116.7c6.25 6.25 6.25 16.38 0 22.62s-16.43 6.28-22.63-.02z" />
  </svg>
);

const SvgArrowTurnDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTurnDownLeft;
