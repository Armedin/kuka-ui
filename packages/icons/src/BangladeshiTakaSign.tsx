import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M57.92 33.11C97.96 38.12 128 72.15 128 112.5v78.6h48c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16h-48v176c0 27.4 21.5 48 48 48h32c79.5 0 144-63.6 144-144v-32c0-25.6-21.5-48-48-48h-32c-8.8 0-16-6.3-16-16 0-7.9 7.2-16 16-16h32c44.2 0 80 36.7 80 80v32c0 98.1-78.8 176-176 176h-32c-44.2 0-80-34.9-80-80v-176H48c-8.83 0-16-6.3-16-16 0-7.9 7.17-16 16-16h48v-78.6c0-24.21-18.02-44.63-42.04-47.63l-7.94-1c-8.77-1.09-14.99-9.09-13.89-17.86 1.09-8.77 9.09-14.98 17.86-13.89l7.93.99z" />
  </svg>
);

const SvgBangladeshiTakaSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBangladeshiTakaSign;
