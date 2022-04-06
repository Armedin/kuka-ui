import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M12.28 403.7 403.7 12.28c15.6-15.617 41-15.617 56.6 0l39.4 39.44c15.6 15.62 15.6 40.94 0 56.58L108.3 499.7c-15.64 15.6-40.96 15.6-56.58 0l-39.44-39.4c-15.617-15.6-15.617-41 0-56.6zM356.7 206.1 477.1 85.66c3.1-3.13 3.1-8.19 0-11.32l-39.4-39.43a8.112 8.112 0 0 0-11.4 0L305.9 155.3l50.8 50.8zm-73.4-28.2L34.91 426.3a8.112 8.112 0 0 0 0 11.4l39.43 39.4c3.13 3.1 8.19 3.1 11.32 0L334.1 228.7l-50.8-50.8z" />
  </svg>
);

const SvgWandMagic = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWandMagic;
