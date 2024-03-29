import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 24C64 10.75 74.75 0 88 0h72c11.5 0 21.4 8.19 23.6 19.51L185.1 32h420.7c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H234.7l9.2 48H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H223.1c-10.6 0-20.5-8.2-22.7-19.5L140.1 48H88c-13.25 0-24-10.75-24-24zm224 440c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm192 0c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zM104 96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h80zm16 80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h96zm16 80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h112z" />
  </svg>
);

const SvgCartShoppingFastSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCartShoppingFastSolid;
