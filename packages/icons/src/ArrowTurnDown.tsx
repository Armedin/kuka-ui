import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m347.3 363.3-144 144c-3.1 3.1-7.2 4.7-12.2 4.7s-8.187-1.562-11.31-4.688l-144-144c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L176 457.4V80c0-26.47-21.5-48-48-48H16C7.156 32 0 24.84 0 16S7.156 0 16 0h112c44.1 0 80 35.88 80 80v377.4l116.7-116.7c6.25-6.25 16.38-6.25 22.62 0s6.28 16.4-.02 22.6z" />
  </svg>
);

const SvgArrowTurnDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTurnDown;
