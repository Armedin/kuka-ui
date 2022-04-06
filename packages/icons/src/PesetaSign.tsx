import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M208 32c74.1 0 135.2 56 143.1 128H368c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16.9c-7.9 71.1-69 128-143.1 128H64v144c0 8.8-7.16 16-16 16s-16-7.2-16-16V192H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16V72.69C32 50.22 50.22 32 72.69 32H208zm110.9 128c-7.8-54.3-54.5-96-110.9-96H72.69A8.69 8.69 0 0 0 64 72.69V160h254.9zM64 192v96h144c56.4 0 103.1-41.7 110.9-96H64z" />
  </svg>
);

const SvgPesetaSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPesetaSign;
