import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.8 64H64c-23.6 0-42.7 19.1-42.7 42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6 0 42.7-19.1 42.7-42.7V106.7c0-23.6-19.3-42.7-42.9-42.7zM21.3 383.6v63.9h63.9c0-35.3-28.6-63.9-63.9-63.9zm0-85V341c58.9 0 106.6 48.1 106.6 107h42.7c.1-82.4-66.9-149.3-149.3-149.4zM213.4 448h42.7c-.5-129.5-105.3-234.3-234.8-234.6v42.4c106-.2 192 86.2 192.1 192.2z" />
  </svg>
);

const SvgChromecast = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChromecast;
