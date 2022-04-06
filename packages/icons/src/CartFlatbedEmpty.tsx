import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 384H128V48c0-26.51-21.5-48-48-48H16C7.156 0 0 7.156 0 16s7.156 16 16 16h64c8.84 0 16 7.16 16 16v336c0 17.67 14.33 32 32 32h24.88c-8.404 14.44-11.86 32.12-5.859 51.24 7.027 22.4 26.86 40.01 50.02 43.85C237.2 517.8 272 486.9 272 448c0-11.72-3.379-22.55-8.877-32h177.8C435.4 425.4 432 436.3 432 448c0 38.91 34.79 69.71 74.93 63.1 23.17-3.816 43.01-21.44 50.04-43.84 5.13-19.16 2.53-36.86-5.87-51.26H624c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-416 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32zm288 0c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgCartFlatbedEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCartFlatbedEmpty;
