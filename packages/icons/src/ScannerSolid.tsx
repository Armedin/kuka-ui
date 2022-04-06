import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M550.6 287.2 79.06 35.74c-15.59-8.25-35-2.405-43.3 13.19-8.31 15.59-2.42 34.97 13.18 43.31l367.1 195.8-368.06-.94C21.47 287.1 0 309.5 0 335.1v96C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V329.6c0-17.7-9.8-34-25.4-42.4zM127.1 399.1c0 8.801-7.199 16-16 16H80.01c-8.801 0-16-7.199-16-16v-31.99c0-8.801 7.199-16 16-16H112c8.801 0 16 7.2 16 16v31.99zm96 0c0 8.801-7.199 16-16 16H176c-8.801 0-16-7.199-16-16v-31.99c0-8.801 7.199-16 16-16h31.99c8.801 0 16 7.2 16 16v31.99z" />
  </svg>
);

const SvgScannerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScannerSolid;
