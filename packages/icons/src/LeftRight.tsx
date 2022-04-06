import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m504.3 238.4-112-104c-7-6.5-17.1-8.2-25.9-4.4S352 142.5 352 152v88H160l.001-88c0-9.547-5.656-18.19-14.41-22s-18.891-2.1-25.891 4.4l-112 104C2.558 243.2 0 249.6 0 255.1s2.558 12.85 7.673 17.6l112 104c6.984 6.484 17.17 8.219 25.92 4.406s14.41-12.45 14.41-22L160 272h192l.001 88c0 9.547 5.656 18.19 14.41 22s18.94 2.078 25.92-4.406l112-104C509.4 268.8 512 262.4 512 255.1s-2.6-11.9-7.7-16.7zM128 341.7 35.75 256 128 170.3v171.4zm256 0V170.3l92.2 85.7-92.2 85.7z" />
  </svg>
);

const SvgLeftRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftRight;
