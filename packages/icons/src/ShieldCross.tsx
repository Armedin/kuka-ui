import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.71-192-80C268.6 1.203 262.3 0 256.1 0s-12.6 1.203-18.5 3.703L45.61 83.71C27.73 91.08 16 108.6 16 127.1 16 385.4 205.4 512 255.9 512 305.2 512 496 387.3 496 127.1c0-18.5-11.7-36.02-29.5-43.39zm-2.6 44.59c0 225.3-166.2 351.7-207.8 351.7C213.3 479.1 48 352.2 48 128c0-6.5 3.875-12.25 9.75-14.75l192-80a16.221 16.221 0 0 1 6.258-1.266c2.071 0 4.154.407 6.117 1.266l192 80c9.175 3.85 9.775 12.55 9.775 15.05zM384 176H272V96c0-8.844-7.156-16-16-16s-16 7.16-16 16v80H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h112v208c0 8.844 7.156 16 16 16s16-7.156 16-16V208h112c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgShieldCross = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldCross;
