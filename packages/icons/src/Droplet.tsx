import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 400c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112.9 0-7.9 7.16-16 16-16 8.8 0 16 8.1 16 16 0 45.1 35.8 80.9 80 80.9zm176-80.9c0 98.1-78.8 176.9-176 176.9S16 417.2 16 319.1c0-73.2 102.3-229.67 150.9-299.8 12.3-17.715 37.9-17.715 50.2 0C265.7 89.43 368 245.9 368 319.1zm-46.5-55.7c-9.7-24.5-23.3-51.8-38.7-79.7-30.4-54.9-66.7-109.57-90.8-144.38-24.1 34.81-60.4 89.48-90.8 144.38-15.43 27.9-29.03 55.2-38.69 79.7C52.57 288.5 48 307.6 48 319.1 48 399.5 112.5 464 192 464s144-64.5 144-144.9c0-11.5-4.6-30.6-14.5-55.7z" />
  </svg>
);

const SvgDroplet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDroplet;
