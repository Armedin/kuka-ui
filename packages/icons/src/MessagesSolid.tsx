import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .01v54.25c0 7.999 9.125 12.62 15.5 7.876l82.75-62.12L352 319.9c35.3.1 64-28.7 64-63.9zm160-128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .001v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.007 82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1c0-34.4-28.7-63.1-64-63.1z" />
  </svg>
);

const SvgMessagesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessagesSolid;
