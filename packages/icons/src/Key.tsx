import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 144c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-8 208c-9.5 0-18.8-.7-27.9-2.2l-28 26.3c-3.6 5.4-9.7 7.9-16.1 7.9h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24v-96c0-6.4 2.529-12.5 7.029-17L164.9 217.2c-3.2-14.1-4.9-27-4.9-41.2C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176zm0-32c79.5 0 144-64.5 144-144 0-79.53-64.5-144-144-144S192 96.47 192 176c0 11.7 1.4 22.1 3.1 33.7l5 17.5L32 395.3V480h96v-64h64v-64h68.7l36.3-36.4 16.2 2.6c7.4 1.2 15 1.8 22.8 1.8z" />
  </svg>
);

const SvgKey = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKey;
