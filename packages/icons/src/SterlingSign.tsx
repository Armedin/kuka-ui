import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M0 272c0-8.8 7.164-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16zM168 64c-48.6 0-88 39.4-88 88v126.1c0 58.8-12.98 116.8-37.88 169.9H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-5.65 0-10.876-3-13.758-7.8a16.132 16.132 0 0 1-.288-15.9l1.112-2C32.55 400.2 48 339.7 48 278.1V152c0-66.27 53.7-120 120-120h7.1c12.9 0 25.7 2.08 38 6.16l80 26.66c8.3 2.8 12 11.86 10.1 20.24-2.8 8.38-11.9 12.91-20.3 10.12l-80.8-26.66c-9-2.99-17.5-4.52-27-4.52H168z" />
  </svg>
);

const SvgSterlingSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSterlingSign;
