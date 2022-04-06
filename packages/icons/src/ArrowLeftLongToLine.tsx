import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 80c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v352c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V80zm100.7 164.7 144-144c6.2-6.26 16.4-6.26 22.6 0 6.3 6.2 6.3 16.4 0 22.6L150.6 239.1H624c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16H150.6l116.7 117.6c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-144-144c-3.14-3.1-4.7-7.2-4.7-12.2 0-3.2 1.56-7.3 4.7-10.4z" />
  </svg>
);

const SvgArrowLeftLongToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowLeftLongToLine;
