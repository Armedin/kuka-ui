import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M54.32 98.69C20.4 142.1 0 196.6 0 256c0 22.14 3.105 43.51 8.391 64h173.7L54.32 98.69zM493.2 160C463.6 86.94 401.29 30.8 324.4 9.5L237.5 160h255.7zM291.4 2.727C279.8 1.119 268 0 256 0 186.1 0 122.9 28.05 76.69 73.42l86.93 150.6L291.4 2.727zM503.6 192H329.9l127.8 221.3C491.6 369.9 512 315.4 512 256c0-22.1-3.1-43.5-8.4-64zM18.78 352c29.6 73.06 91.91 129.2 168.8 150.5L274.5 352H18.78zM220.6 509.3c11.6 1.6 22.5 2.7 35.4 2.7 69.86 0 133.1-28.05 179.3-73.42l-86.93-150.6L220.6 509.3z" />
  </svg>
);

const SvgApertureSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgApertureSolid;
