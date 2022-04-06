import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 16c0-8.836 7.2-16 16-16 141.4 0 256 114.6 256 256 0 46.6-12.5 90.4-34.3 128-4.4 7.7-14.2 10.3-21.8 5.9-7.7-4.5-10.3-14.2-5.9-21.9 19.1-32.9 30-71.2 30-112 0-123.7-100.3-224-224-224-8.8 0-16-7.16-16-16z" />
  </svg>
);

const SvgSpinnerThird = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSpinnerThird;
