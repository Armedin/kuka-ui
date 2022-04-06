import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M214.1 256.5 102.6 368l52.7 52.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-53.6-52.7L38.63 432l52.68 52.7c6.25 6.2 6.25 16.4 0 22.6-6.24 6.3-16.37 6.3-22.62 0l-64.004-64c-6.248-6.2-6.248-16.4 0-22.6L191.5 233.9c-19.7-24.7-32.4-55.9-32.4-89.9C159.1 64.47 224.5 0 304 0s144 64.47 144 144c0 79.5-64.5 144-144 144-34 0-65.2-11.8-89.9-31.5zm89.9-1.4c61.9 0 112-49.2 112-112 0-60.96-50.1-112-112-112s-112.9 51.04-112.9 112c0 62.8 51 112 112.9 112z" />
  </svg>
);

const SvgKeySkeleton = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeySkeleton;
