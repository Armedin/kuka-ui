import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.69-192-80.01C268.6 1.188 262.3 0 256.1 0s-12.6 1.188-18.5 3.688l-192 80.01C27.72 91.07 16 108.6 16 127.1 16 385.4 205.4 512 255.1 512 305.2 512 496 387.3 496 127.1c0-18.5-11.7-36.03-29.5-43.41zm-2.6 44.61c0 225.3-166.2 351.7-207.8 351.7C213.3 479.1 48 352.2 48 128c0-6.5 3.875-12.25 9.75-14.75l192-80a16.221 16.221 0 0 1 6.258-1.266c2.071 0 4.154.407 6.117 1.266l192 80c9.175 3.85 9.775 12.55 9.775 15.05zM256 288c8.844 0 16-7.156 16-16V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16zm0 40c-13.25 0-24 10.75-24 24s10.75 24 24 24c13.26 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

const SvgShieldExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldExclamation;
