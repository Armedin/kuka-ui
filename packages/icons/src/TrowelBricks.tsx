import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 112h88c0-17.67 14.3-32 32-32h88c26.5 0 48 21.5 48 48s-21.5 48-48 48h-88c-17.7 0-32-14.3-32-32h-88v80c0 11.1-5.7 21.4-15.2 27.2-9.4 5.9-21.2 6.4-31.1 1.4l-192.01-96C6.848 151.2 0 140.1 0 128c0-12.1 6.848-23.2 17.69-28.62L209.7 3.378c9.9-4.959 21.7-4.429 31.1 1.401C250.3 10.61 256 20.91 256 32v80zm-32 112V32L32 128l192 96zm240-112h-88v32h88c8.8 0 16-7.2 16-16s-7.2-16-16-16zM320 224h160c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-96c0-17.7 14.33-32 32-32h256v-96c0-17.7 14.3-32 32-32zm-64 160v96h224v-96H256zm-32 0H32v96h192v-96zm256-128H320v96h160v-96z" />
  </svg>
);

const SvgTrowelBricks = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrowelBricks;
