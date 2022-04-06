import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M347.3 171.3c-6.25 6.25-16.38 6.25-22.62 0L208 54.63V432c0 44.13-35.89 80-80 80H16c-8.844 0-16-7.2-16-16s7.156-16 16-16h112c26.47 0 48-21.53 48-48V54.63L59.31 171.3c-6.25 6.25-16.38 6.25-22.62 0s-6.25-16.38 0-22.62l144-144A15.928 15.928 0 0 1 192 0c4.094 0 8.188 1.562 11.31 4.688l144 144c6.29 6.212 6.29 16.412-.01 22.612z" />
  </svg>
);

const SvgArrowTurnUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTurnUp;
