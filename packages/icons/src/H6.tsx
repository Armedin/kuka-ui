import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 240h256V80c0-8.84 7.2-16 16-16s16 7.16 16 16v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V272H32v160c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V80c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v160zM505.4 67.06c7.2 5.2 8.7 15.21 3.5 22.35l-56.1 77.19c13.6-4.3 27.3-6.6 43.2-6.6 79.5 0 144 64.5 144 144s-64.5 144-144 144-144-64.5-144-144c0-34.6 10.1-68.3 31.3-96.2l99.8-137.21c5.2-7.15 15.2-8.73 22.3-3.53zM608 304c0-61.9-50.1-112-112-112s-112 50.1-112 112 50.1 112 112 112 112-50.1 112-112z" />
  </svg>
);

const SvgH6 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH6;
