import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 72c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.75-24-24zm0 80c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zM16 232c0-13.3 10.75-24 24-24h16c13.25 0 24 10.7 24 24s-10.75 24-24 24H40c-13.25 0-24-10.7-24-24zm516.6 56c15.1 0 27.4 12.3 27.4 27.4 0 72.9-47.4 134.8-113.1 156.4.7 2.6 1.1 5.4 1.1 8.2 0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32 0-2.8.4-5.6 1.1-8.2C63.4 450.2 16 388.3 16 315.4c0-15.1 12.28-27.4 27.43-27.4H532.6zM248 208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16zm-96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16zm-40-56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm232 56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16zm-40-56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm136 56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16zm-40-56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm136 56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16zM344 48c13.3 0 24 10.75 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.75-24-24s10.7-24 24-24h16z" />
  </svg>
);

const SvgBowlRiceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlRiceSolid;
