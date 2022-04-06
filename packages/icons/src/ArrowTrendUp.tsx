import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M368 112c0-8.8 7.2-16 16-16h176c8.8 0 16 7.2 16 16v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V150.6L331.3 363.3c-6.2 6.3-16.4 6.3-22.6 0L192 246.6 27.31 411.3c-6.24 6.3-16.37 6.3-22.624 0-6.248-6.2-6.248-16.4 0-22.6l176.014-176c6.2-6.3 16.4-6.3 22.6 0L320 329.4 521.4 128H384c-8.8 0-16-7.2-16-16z" />
  </svg>
);

const SvgArrowTrendUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTrendUp;
