import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.69-192-80.01C269.6 1.656 261.3 0 256.1 0c-5.3 0-13.6 1.656-18.5 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1 16 385.2 205.2 512 255.1 512c52 0 240.9-128.2 240.9-384.9 0-18.5-11.7-36.02-29.5-43.41zM336 279.1h-56V336c0 13.26-10.74 23.1-23.1 23.1-13.27 0-23.1-10.74-23.1-23.1v-56.9H176c-13.27 0-23.1-10.74-23.1-23.1-.9-13.3 9.8-24 23.1-24h56v-56.9c0-13.26 10.74-23.1 23.1-23.1s24.9 10.7 24.9 23.1V232h56c13.26 0 23.1 10.74 23.1 23.1s-9.8 24-23.1 24z" />
  </svg>
);

const SvgShieldPlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldPlusSolid;
