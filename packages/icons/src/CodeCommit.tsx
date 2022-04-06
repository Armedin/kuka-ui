import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M447 272c-7.9 63.1-61.7 112-127 112s-119.1-48.9-127.9-112H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h176.1c8.8-63.1 62.6-112 127.9-112 65.3 0 119.1 48.9 127 112h177c8.8 0 16 7.2 16 16s-7.2 16-16 16H447zm-127 80c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z" />
  </svg>
);

const SvgCodeCommit = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCodeCommit;
