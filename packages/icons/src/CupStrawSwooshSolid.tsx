import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M60.84 483.5c1.8 16.2 15.5 28.5 31.8 28.5h198.7c16.3 0 30-12.26 31.8-28.47L352 224H32l28.84 259.5zM180.8 353.6c34.54-46.05 82.82-72.64 132.8-73.44l-5.432 48.88c-33.15 2.588-64.54 20.83-88.93 53.37-33.73 44.97-80.58 71.24-129.3 73.21l-5.299-47.69C120.5 407.7 154.6 388.5 180.8 353.6zm202.3-210.5c0-8.875-7.125-15.1-15.1-15.1H222.8l20-80 45.27-.001c8.875 0 16-7.125 16-15.1l-.02-15.1c0-8.875-7.123-16-15.1-16h-51.52c-18.38 0-34.36 12.49-38.73 30.24L173.3 127.1H16c-8.877 0-16 8-16 16v31.1c0 8.875 7.125 16 16 16h352c8.875 0 16-7.125 16-16l-.9-31.1z" />
  </svg>
);

const SvgCupStrawSwooshSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCupStrawSwooshSolid;
