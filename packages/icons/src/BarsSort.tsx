import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 80c0-8.84 7.164-16 16-16h416c8.8 0 16 7.16 16 16s-7.2 16-16 16H16C7.164 96 0 88.84 0 80zm0 160c0-8.8 7.164-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16zm176 176H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgBarsSort = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBarsSort;
