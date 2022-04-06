import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 80c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H16c-8.836 0-16-7.2-16-16 0-8.84 7.164-16 16-16h416zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h288zM128 416c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zM0 240c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v192c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V240z" />
  </svg>
);

const SvgBlockQuote = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlockQuote;
