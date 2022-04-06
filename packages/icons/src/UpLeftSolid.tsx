import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m358.6 377.4-45.26 45.25c-12.5 12.5-32.76 12.5-45.25 0L138.5 293l-67.88 67.88a32.005 32.005 0 0 1-34.87 6.938C23.79 362.9 16 351.2 16 338.3V112a31.91 31.91 0 0 1 9.369-22.63C31.16 83.58 39.16 80 47.1 80h226.3c12.95 0 24.61 7.789 29.57 19.75a32.012 32.012 0 0 1-6.939 34.87l-67.88 67.88 129.6 129.6c13.349 12.5 13.349 32.8.849 45.3z" />
  </svg>
);

const SvgUpLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpLeftSolid;
