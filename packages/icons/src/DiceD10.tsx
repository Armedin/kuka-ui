import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 282.6c0-7.59-2.683-15.19-8.118-21.32l-224.1-250.6C273.5 3.5 264.8 0 256 0s-17.5 3.5-23.8 10.62L8.151 261.3C2.671 267.4 0 274.1 0 282.5c0 8.9 3.662 17.7 10.8 24L234.9 504c6 5.4 13.6 8 21.1 8 7.5 0 15.12-2.615 21.12-7.99l224.1-197.5C508.4 300.2 512 291.4 512 282.6zM256 298l-75.8-50.6 75.87-177 75.87 177L256 298zm-107.2-58.2L47.79 265 221 71.12 148.8 239.8zm214.5 0L291 71.12 464.5 265l-101.2-25.2zM49.04 297.6l108.26-27.1 82.75 55.25v140.3L49.04 297.6zM272 465.9V325.8l82.75-55.25 108.1 27.12L272 465.9z" />
  </svg>
);

const SvgDiceD10 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiceD10;
