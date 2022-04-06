import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 48c0-8.84 7.164-16 16-16h352c8.8 0 16 7.16 16 16s-7.2 16-16 16H16C7.164 64 0 56.84 0 48zm0 128c0-8.8 7.164-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H208v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V192H16c-8.836 0-16-7.2-16-16z" />
  </svg>
);

const SvgTengeSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTengeSign;
