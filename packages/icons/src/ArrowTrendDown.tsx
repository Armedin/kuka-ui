import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 384h137.4L320 182.6 203.3 299.3c-6.2 6.3-16.4 6.3-22.6 0L4.686 123.3c-6.248-6.2-6.248-16.4 0-22.6 6.244-6.26 16.374-6.26 22.624 0L192 265.4l116.7-116.7c6.2-6.3 16.4-6.3 22.6 0L544 361.4V224c0-8.8 7.2-16 16-16s16 7.2 16 16v176c0 8.8-7.2 16-16 16H384c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
  </svg>
);

const SvgArrowTrendDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTrendDown;
