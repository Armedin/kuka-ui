import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M243.1 2.706c11.7 6.115 16.3 20.604 10.2 32.364L171.7 192h232.6L322.7 35.07c-6.1-11.76-1.5-26.249 10.2-32.364 11.8-6.115 26.3-1.539 32.4 10.224L458.4 192H544c17.7 0 32 14.3 32 32s-14.3 32-32 32l-51.9 207.5c-8 28.5-32.7 48.5-62.1 48.5H145.1c-28.5 0-54.1-20-61.22-48.5L32 256c-17.67 0-32-14.3-32-32s14.33-32 32-32h85.6l93.1-179.07c6.1-11.763 20.6-16.339 32.4-10.224zM144 296c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm288-48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgBasketShoppingSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBasketShoppingSimpleSolid;
