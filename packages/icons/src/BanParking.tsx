import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m176 257.9 62.1 62.1H208v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V257.9zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c56.1 0 107.4-20.6 146.7-54.7l-316-316C52.62 148.6 32 199.9 32 256c0 123.7 100.3 224 224 224zm75.1-170.6 94.2 93.3c34.1-39.3 54.7-90.6 54.7-147.6 0-122.8-100.3-224-224-224-56.1 0-107.4 21.52-146.7 55.6l66.7 66.7v-2.3c0-12.4 10.7-24 24-24h88c53 0 96 43 96 96 0 38.1-21.1 70.3-52.9 86.3zm-23.5-25.3c25.7-7.4 44.4-31.6 44.4-60.1 0-35.3-28.7-64-64-64h-80v25.4l99.6 98.7z" />
  </svg>
);

const SvgBanParking = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBanParking;
