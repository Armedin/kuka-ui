import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M180.7 155.3c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l17.4 17.4L341.6 29.23c39-38.974 102.2-38.974 141.2 0 38.9 38.98 38.9 102.17 0 141.17L361.9 291.3l17.4 17.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-176-176zm158.6 113.3 120.8-120.8c26.5-26.5 26.5-69.46 0-95.94-26.4-26.48-69.4-26.48-95.9 0L243.4 172.7l95.9 95.9zm-261.24 76c-9 9-14.06 21.2-14.06 33.9v49.7l-26.33 46.1L83.75 448h49.75c12.7 0 24.9-5.1 33.9-14.1l109.3-109.2c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6L190.1 456.6c-15 15-35.4 23.4-56.6 23.4H92.25l-49.4 28.2a28.35 28.35 0 0 1-14.21 3.8C12.82 512 0 499.2 0 483.4c0-5 1.301-9.9 3.774-14.3L32 419.8v-41.3c0-21.2 8.43-41.6 23.43-56.6L164.7 212.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6L78.06 344.6z" />
  </svg>
);

const SvgEyeDropper = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEyeDropper;
